import { useAppSelector, useAppDispatch } from "../../hooks";
import { removeUserAddress } from "../../actions";
import { UserAddress } from "../../reducers";
import UserAddressItem from "../user-address/UserAddress";

const AddressList = () => {
  const userAddresses = useAppSelector((state: any) => state.userAddresses);
  const dispatch = useAppDispatch();

  const deleteItem = (id: string) => {
    console.log(id);
    console.log(userAddresses);
    dispatch(removeUserAddress(id));
  };

  return (
    <ul>
      {userAddresses.map((address: UserAddress) => (
        <UserAddressItem
          key={address.id}
          onDelete={deleteItem}
          address={address}
        />
      ))}
    </ul>
  );
};

export default AddressList;
