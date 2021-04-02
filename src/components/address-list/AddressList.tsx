import React from "react";
import { useSelector } from "react-redux";

const AddressList = () => {
  const userAddresses = useSelector((state: any) => state.userAddresses);
  return (
    <ul>
      {userAddresses.map((address: any) => (
        <li>
          <div>{`${address.timeAtAddress.years} years, ${address.timeAtAddress.months} months`}</div>
          <div>{`${address.addressLine1}`}</div>
          <div>{`${address.addressLine2}`}</div>
          <div>{`${address.city}`}</div>
          <div>{`${address.county}`}</div>
          <div>{`${address.postcode}`}</div>
        </li>
      ))}
    </ul>
  );
};

export default AddressList;
