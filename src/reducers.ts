const initialState = {
  userAddresses: [],
};

export function formDataReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "SET_POSTCODE":
      return {
        ...state,
        formData: { ...state.formData, postcode: action.payload },
      };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        userAddresses: [...state.userAddresses, action.payload],
      };
    case "SET_YEARS_AT_ADDRESS":
      return {
        ...state,
        timeAtAddress: { ...state.timeAtAddress, years: action.payload },
      };
    case "SET_MONTHS_AT_ADDRESS":
      return {
        ...state,
        timeAtAddress: { ...state.timeAtAddress, months: action.payload },
      };
    // case "DISPLAY_ADDRESS":
    //   return {
    //     ...state,
    //     ...action.payload,
    //     isLoading: false,
    //   };
    // case "DELETE_ADDRESS":
    //   return { ...state, hasError: true, isLoading: false };
    default:
      return state;
  }
}
