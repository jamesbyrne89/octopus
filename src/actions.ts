export const setPostcode = (postcode: string) => ({
  type: "SET_POSTCODE",
  payload: postcode,
});

export const setYearsAtAddress = (years: number) => ({
  type: "SET_YEARS_AT_ADDRESS",
  payload: years,
});

export const setMonthsAtAddress = (months: number) => ({
  type: "SET_MONTHS_AT_ADDRESS",
  payload: months,
});

export const addNewAddress = (address: {
  timeAtAddress: { years: number; months: number };
  addressLine1: string;
  addressLine2: string;
  city: string;
  county: string;
  postcode: string;
}) => ({
  type: "ADD_NEW_ADDRESS",
  payload: address,
});
