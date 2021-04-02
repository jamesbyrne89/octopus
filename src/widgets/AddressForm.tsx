import { useForm } from "react-hook-form";
import TextInput from "../components/text-input/TextInput";
import Button from "../components/button/Button";
import { SelectedAddressData } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { addNewAddress } from "../actions";
import { useEffect } from "react";

interface AddressFormProps {
  addressData: SelectedAddressData;
}

const AddressForm = ({ addressData }: AddressFormProps) => {
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: addressData,
  });

  const dispatch = useDispatch();
  const timeAtAddress = useSelector((state: any) => state.timeAtAddress);
  const onSubmit = (formData: any) => {
    console.log({ timeAtAddress });
    dispatch(addNewAddress({ ...formData, timeAtAddress }));
    console.log({ formData });
  };

  useEffect(() => {
    console.log({ addressData });
    reset();
  }, [addressData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button text="Add address" />
    </form>
  );
};

export default AddressForm;
