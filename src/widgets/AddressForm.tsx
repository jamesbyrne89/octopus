import { useForm } from "react-hook-form";
import TextInput from "../components/text-input/TextInput";
import Button from "../components/button/Button";
import { SelectedAddressData } from "../App";

interface AddressFormProps {
  addressData: SelectedAddressData;
}

const AddressForm = ({ addressData }: AddressFormProps) => {
  console.log({ addressData });
  const { register, handleSubmit, watch, control, errors } = useForm({
    defaultValues: addressData,
  });

  console.log(watch());

  const handlePostcodeSearch = (data: string) => {
    console.log("Search for ", data);
  };

  console.log({ errors });

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        console.log(formData);
      })}
    >
      {/*  <div>

      </div>
      <SearchInput onSubmit={handlePostcodeSearch} /> */}
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
