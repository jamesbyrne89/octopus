import styled from "styled-components";
import { InputLabelStyles } from "../../App";
import magIcon from "../../assets/magnifying-glass.png";

interface SearchInputProps {
  register: any;
  name: string;
  placeholder?: string;
  label: string;
}

const SearchInputStyles = styled.div`
  margin-top: 2rem;

  label {
    display: block;
    text-align: left;
  }

  .search-input__wrapper {
    display: flex;
    position: relative;
    margin-top: 0.75rem;
  }

  input {
    background: transparent;
    line-height: 2.5;
    color: white;
    padding: 0 1rem;
    border: solid 1px white;
    width: 100%;

    &::placeholder {
      color: white;
      opacity: 1;
    }
  }

  .search-input__submit-btn {
    display: inline-flex;
    align-items: center;
    background: none;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    img {
      height: 0.95em;
      width: 0.95em;
    }
  }
`;

const SearchInput = ({
  register,
  name,
  placeholder,
  label,
}: SearchInputProps) => {
  return (
    <SearchInputStyles>
      <InputLabelStyles htmlFor={name}>
        <span>{label}</span>
        <div className="search-input__wrapper">
          <input
            type="text"
            ref={register}
            name={name}
            placeholder={placeholder}
            data-testid="postcode-search-input"
          />
          <button
            type="submit"
            className="search-input__submit-btn"
            aria-label="Search by postcode"
            data-testid="postcode-search-input-submit-btn"
          >
            <img alt="" src={magIcon} />
          </button>
        </div>
      </InputLabelStyles>
    </SearchInputStyles>
  );
};

export default SearchInput;
