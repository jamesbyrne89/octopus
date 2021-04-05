import styled from "styled-components";
import { UserAddress } from "../../reducers";
import deleteIcon from "../../assets/delete.png";

const UserAddressStyles = styled.li`
  border: solid 1px white;
  background: var(--gradient-color-one);
  text-align: left;
  padding: 1rem;
  list-style: none;
  margin: 1rem 0 0;
  position: relative;
  button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 0.5rem;

    img {
      height: 0.95rem;
      width: 0.95rem;
    }
  }
`;

interface UserAddressProps {
  address: UserAddress;
  onDelete: (id: string) => void;
}

const UserAddressItem = ({ address, onDelete }: UserAddressProps) => (
  <UserAddressStyles data-testid="user-address-item">
    <div className="user-address__header">
      <button
        data-testid="delete-address-btn"
        type="button"
        aria-label="Remove address"
        onClick={() => onDelete(address.id)}
      >
        <img alt="" src={deleteIcon} />
      </button>
    </div>
    <div>{`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${
      address.county
    }, ${address.postcode.toUpperCase()}`}</div>

    <div>
      <span>Time at address: </span>
      <span>
        {address.timeAtAddress.years || address.timeAtAddress.months
          ? `${address.timeAtAddress.years} years, ${address.timeAtAddress.months} months`
          : "Not supplied"}
      </span>
    </div>
  </UserAddressStyles>
);

export default UserAddressItem;
