import { AnyAction } from "redux";

export interface UserAddress {
  id: string;
  timeAtAddress: { years: number; months: number };
  addressLine1: string;
  addressLine2: string;
  city: string;
  county: string;
  postcode: string;
}

interface State {
  userAddresses: UserAddress[];
  formData: {
    timeAtAddress?: { years: number; months: number };
    address?: {
      addressLine1: string;
      addressLine2: string;
      city: string;
      county: string;
      postcode: string;
    };
  };
}

const initialState: State = {
  userAddresses: [],
  formData: {},
};

export function formDataReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "SET_POSTCODE":
      return {
        ...state,
        formData: { ...state.formData, postcode: action.payload },
      };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        userAddresses: [
          ...state.userAddresses,
          { ...action.payload, id: `${Math.random() * 10000}` }, // NOT production-ready solution! :)
        ],
      };
    case "REMOVE_USER_ADDRESS":
      return {
        ...state,
        userAddresses: state.userAddresses.filter(
          (a: UserAddress) => a.id !== action.payload
        ),
      };
    case "SET_YEARS_AT_ADDRESS":
      return {
        ...state,
        formData: {
          timeAtAddress: state.formData?.timeAtAddress,
          years: action.payload,
        },
      };
    case "SET_MONTHS_AT_ADDRESS":
      return {
        ...state,
        formData: {
          timeAtAddress: state.formData?.timeAtAddress,
          months: action.payload,
        },
      };
    case "SET_SELECTED_ADDRESS":
      return {
        ...state,
        formData: { ...state.formData, address: action.payload },
      };
    case "CLEAR_FORM_DATA":
      return {
        ...state,
        formData: {},
      };

    default:
      return state;
  }
}
