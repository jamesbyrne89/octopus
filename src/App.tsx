import { useState } from "react";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import "./App.css";
import SearchInput from "./components/search/input/SearchInput";
import Select from "./components/select/Select";
import AddressForm from "./widgets/AddressForm";

export interface SelectedAddressData {
  addressLine1: string;
  addressLine2: string;
  city: string;
  county?: string;
  postcode: string;
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Container = styled.main`
  padding: 2rem;
  width: 100%;
  max-width: 20rem;
  margin: auto;
`;

function App() {
  const [addressMatches, setAddressMatches] = useState<
    { value: string; label: string }[] | null
  >(null);
  const [timeAtAddress, setTimeAtAddress] = useState<any>(null);
  const [
    selectedAddress,
    setSelectedAddress,
  ] = useState<SelectedAddressData | null>(null);

  const { register, handleSubmit, watch, control, errors } = useForm();

  const removeEmptyFields = (address: string) => {
    return address
      .split(",")
      .filter((chunk: string) => chunk !== " ")
      .join(",");
  };

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
        console.log({ data });
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
    getAddresses(formattedPostcode);
  };

  const onAddressSelect = (address: { value: string; label: string }) => {
    console.log({ address });
    const addressArr = address.value.split(",");
    const [addressLine1, addressLine2, city] = addressArr;
    const formattedData: Omit<SelectedAddressData, "county" | "postcode"> = {
      addressLine1,
      addressLine2,
      city,
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
        <Flex>
          <Controller
            as={Select}
            name="years"
            onSelect={(d: any) => console.log(d)}
            placeholder="Select years"
            options={[
              {
                value: 0,
                label: "0 years",
              },
              {
                value: 1,
                label: "1 year",
              },
              { value: 2, label: "2 years" },
              { value: 3, label: "3 years" },
              { value: 4, label: "4 years" },
              { value: "5+", label: "5+ years" },
            ]}
            control={control}
          />

          <Controller
            as={Select}
            name="months"
            onSelect={(d: any) => console.log(d)}
            placeholder="Select months"
            options={[
              {
                value: 0,
                label: "0 months",
              },
              {
                value: 1,
                label: "1 month",
              },
              { value: 2, label: "2 months" },
              { value: 3, label: "3 months" },
              { value: 4, label: "4 months" },
              { value: 5, label: "5 months" },
              { value: 6, label: "6 months" },
              { value: 7, label: "7 months" },
              { value: 8, label: "8 months" },
              { value: 9, label: "9 months" },
              { value: 10, label: "10 months" },
              { value: 11, label: "11 months" },
            ]}
            control={control}
          />
        </Flex>
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
                value: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
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
