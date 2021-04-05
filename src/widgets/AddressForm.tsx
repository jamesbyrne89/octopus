import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextInput from "../components/text-input/TextInput";
import Button from "../components/button/Button";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addNewAddress } from "../actions";
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
    console.log({ formData });
  };

  useEffect(() => {
    reset(selectedAddress);
  }, [selectedAddress, reset]);

  return (
    <AddressFormStyles onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        register={register({
          required: "Address line 1 is required",
        })}
        name="addressLine1"
        label="Address line 1*"
      />
      {errors.addressLine1 && <div>{errors.addressLine1.message}</div>}
      <TextInput
        register={register}
        name="addressLine2"
        label="Address line 2"
      />
      <TextInput register={register} name="city" label="City*" />
      <TextInput register={register} name="county" label="County" />
      <TextInput
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
