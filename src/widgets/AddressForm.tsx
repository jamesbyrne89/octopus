import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextInput from "../components/text-input/TextInput";
import Button from "../components/button/Button";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addNewAddress, clearFormData } from "../actions";
import { useEffect } from "react";

const AddressFormStyles = styled.form`
  margin-top: 3rem;

  .address-form__submit-btn-wrapper {
    margin-top: 3rem;
  }
`;

const AddressForm = () => {
  const selectedAddress = useAppSelector((state) => state.formData.address);
  const timeAtAddress = useAppSelector((state) => state.formData.timeAtAddress);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: selectedAddress,
  });

  const onSubmit = (formData: any) => {
    dispatch(
      addNewAddress({ ...formData, timeAtAddress: timeAtAddress || {} })
    );
    dispatch(clearFormData());
  };

  useEffect(() => {
    reset(selectedAddress);
  }, [selectedAddress, reset]);

  return (
    <AddressFormStyles
      onSubmit={handleSubmit(onSubmit)}
      data-testid="address-form"
    >
      <TextInput
        testId="address-line-1-input"
        register={register({
          required: "Address line 1 is required",
        })}
        name="addressLine1"
        label="Address line 1*"
      />
      {errors.addressLine1 && <div>{errors.addressLine1.message}</div>}
      <TextInput
        testId="address-line-2-input"
        register={register}
        name="addressLine2"
        label="Address line 2"
      />
      <TextInput
        testId="city-input"
        register={register({
          required: "City is required",
        })}
        name="city"
        label="City*"
      />
      <TextInput
        testId="county-input"
        register={register}
        name="county"
        label="County"
      />
      <TextInput
        testId="postcode-input"
        register={register({
          required: "Postcode is required",
        })}
        name="postcode"
        label="Postcode*"
      />
      {errors.postcode && <div>{errors.postcode.message}</div>}
      <div className="address-form__submit-btn-wrapper">
        <Button text="Add Address" />
      </div>
    </AddressFormStyles>
  );
};

export default AddressForm;
