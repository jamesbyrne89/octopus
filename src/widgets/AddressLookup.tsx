import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPostcode, setSelectedAddress } from "../actions";
import Select from "../components/select/Select";
import { InputLabelStyles } from "../App";
import SearchInput from "../components/search/input/SearchInput";
import { useForm } from "react-hook-form";

export interface SelectedAddressData {
  addressLine1: string;
  addressLine2: string;
  city: string;
  county: string;
  postcode: string;
}

const removeEmptyFields = (address: string) => {
  return address
    .split(",")
    .filter((chunk: string) => chunk !== " ")
    .join(",");
};

const VALID_UK_POSTCODE_REGEX = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

const formatAddressMatchValue = (address: string) => {
  const [
    addressLine1 = "",
    addressLine2 = "",
    addressLine3 = "", // eslint-disable-line @typescript-eslint/no-unused-vars
    addressLine4 = "", // eslint-disable-line @typescript-eslint/no-unused-vars
    addressLine5 = "", // eslint-disable-line @typescript-eslint/no-unused-vars
    city = "",
    county = "",
  ] = address.split(",").map((str) => str.trim());
  return {
    addressLine1,
    addressLine2,
    city,
    county,
  };
};

const AddressLookup = () => {
  const [addressMatches, setAddressMatches] = useState<
    { value: string; label: string }[] | null
  >(null);
  const [apiError, setApiError] = useState(false);

  const dispatch = useDispatch();

  const { register, handleSubmit, errors, watch } = useForm();

  const getAddresses = (postcode = "") => {
    fetch(
      `https://api.getAddress.io/find/${postcode}?api-key=${process.env.REACT_APP_API_KEY}`,
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          setApiError(true); // Handle API errors here
          return;
        }
        return res.json();
      })
      .then((data) => {
        // Deal with data
        console.log({ data });
        const formattedAddressMatches = data.addresses.map(
          (address: string) => ({
            value: formatAddressMatchValue(address),
            label: `${removeEmptyFields(address)}, ${postcode.toUpperCase()}`,
          })
        );
        setAddressMatches(formattedAddressMatches);
        return;
      })
      .catch(() => setApiError(true));
  };

  const onSubmit = ({
    postcodeSearch: postcode,
  }: {
    postcodeSearch: string;
  }) => {
    const formattedPostcode = postcode.trim().split(" ").join("").toLowerCase();
    dispatch(setPostcode(formattedPostcode));
    getAddresses(formattedPostcode);
  };

  const onAddressSelect = (address: {
    value: {
      addressLine1: string;
      addressLine2: string;
      city: string;
      county: string;
    };
    label: string;
  }) => {
    const postcode = watch("postcodeSearch");
    const formattedData: SelectedAddressData = {
      ...address.value,
      postcode: postcode.trim().toUpperCase(),
    };
    console.log({ formattedData });
    dispatch(setSelectedAddress({ ...formattedData, postcode }));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          label="Postcode search"
          name="postcodeSearch"
          placeholder="Enter postcode"
          register={register({
            pattern: {
              value: VALID_UK_POSTCODE_REGEX,
              message: "Please enter a valid postcode",
            },
          })}
        />
      </form>
      {errors.postcodeSearch && <div>{errors.postcodeSearch.message}</div>}
      {apiError && <div>Failed to fetch addresses</div>}
      {addressMatches && !apiError && (
        <div className="address-matches-dropdown-wrapper">
          <InputLabelStyles>
            <span>Address</span>
            <Select
              name="address-matches"
              onSelect={onAddressSelect}
              options={addressMatches}
            />
          </InputLabelStyles>
        </div>
      )}
    </>
  );
};

export default AddressLookup;
