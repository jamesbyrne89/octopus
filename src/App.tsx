import { useState } from "react";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import "./App.css";
import SearchInput from "./components/search/input/SearchInput";
import Select from "./components/select/Select";
import AddressForm from "./widgets/AddressForm";
import { useDispatch } from "react-redux";
import { setPostcode } from "./actions";
import TimeAtAddressInput from "./widgets/TimeAtAddressInput";
import AddressList from "./components/address-list/AddressList";

export interface SelectedAddressData {
  addressLine1: string;
  addressLine2: string;
  city: string;
  county?: string;
  postcode: string;
}

const Container = styled.main`
  padding: 2rem;
  width: 100%;
  max-width: 20rem;
  margin: auto;
`;

const removeEmptyFields = (address: string) => {
  return address
    .split(",")
    .filter((chunk: string) => chunk !== " ")
    .join(",");
};

const VALID_UK_POSTCODE_REGEX = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

function App() {
  const [addressMatches, setAddressMatches] = useState<
    { value: string; label: string }[] | null
  >(null);

  const [
    selectedAddress,
    setSelectedAddress,
  ] = useState<SelectedAddressData | null>(null);

  const dispatch = useDispatch();

  const { register, handleSubmit, watch, control, errors } = useForm();

  const getAddresses = (postcode = "sw46hs") => {
    console.log({ postcode });
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
      .then((res) => res.json())
      .then((data) => {
        // Deal with data
        const formattedAddressMatches = data.addresses.map(
          (address: string) => ({
            value: `${address}, ${postcode.toUpperCase()}`,
            label: `${removeEmptyFields(address)}, ${postcode.toUpperCase()}`,
          })
        );
        setAddressMatches(formattedAddressMatches);
      })
      .catch((err) => console.error(err.message));
  };

  const onSubmit = (postcode: string) => {
    const formattedPostcode = postcode.trim().split(" ").join("").toLowerCase();
    dispatch(setPostcode(formattedPostcode));
    getAddresses(formattedPostcode);
  };

  const onAddressSelect = (address: { value: string; label: string }) => {
    console.log({ address });
    const addressArr = address.label.split(",");
    const [addressLine1, addressLine2, city] = addressArr;
    const formattedData: Omit<SelectedAddressData, "county" | "postcode"> = {
      addressLine1: addressLine1.trim(),
      addressLine2: addressLine2.trim(),
      city: city.trim(),
    };
    const postcode = watch("postcodeSearch");
    setSelectedAddress({ ...formattedData, postcode });
  };

  console.log({ errors });
  return (
    <div className="App">
      <Container>
        <h1>Address Search</h1>

        <h2>Please enter your address</h2>
        <AddressList />
        <TimeAtAddressInput />
        <form
          onSubmit={handleSubmit((formData) =>
            onSubmit(formData.postcodeSearch)
          )}
        >
          <SearchInput
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
        {addressMatches && (
          <Controller
            as={Select}
            name="addressMatches"
            onSelect={onAddressSelect}
            options={addressMatches}
            control={control}
          />
        )}
        {selectedAddress && <AddressForm addressData={selectedAddress} />}
      </Container>
    </div>
  );
}

export default App;
