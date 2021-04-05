import styled from "styled-components";
import "./App.css";
import AddressForm from "./widgets/AddressForm";
import TimeAtAddressInput from "./widgets/TimeAtAddressInput";
import AddressList from "./components/address-list/AddressList";
import Header from "./components/header/Header";
import { useAppSelector } from "./hooks";
import AddressLookup from "./widgets/AddressLookup";

const Container = styled.main`
  padding: 2rem;
  width: 100%;
  max-width: 30rem;
  margin: auto;
`;

export const InputLabelStyles = styled.label`
  margin-top: 2rem;
  color: white;
  text-align: left;

  span {
    font-size: 0.875rem;
    display: block;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.75rem;
  }
`;

function App() {
  const selectedAddress = useAppSelector((state) => state.formData.address);
  return (
    <div className="App">
      <Container>
        <Header />
        <AddressList />
        <TimeAtAddressInput />
        <AddressLookup />
        {selectedAddress && <AddressForm />}
      </Container>
    </div>
  );
}

export default App;
