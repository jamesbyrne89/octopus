import styled from "styled-components";

interface SearchInputProps {
  register: any;
  name: string;
  placeholder?: string;
}

const SearchInputStyles = styled.div`
  margin-top: 2rem;

  input {
    background: transparent;
    line-height: 2.5;
    color: white;
    padding: 0 1rem;
    border: solid 1px white;

    &::placeholder {
      color: white;
      opacity: 1;
    }
  }
`;

const SearchInput = ({ register, name, placeholder }: SearchInputProps) => {
  return (
    <SearchInputStyles>
      <input type="text" ref={register} name={name} placeholder={placeholder} />
      <button className="filter-input__suffix filter-input__close-button">
        Search
      </button>
    </SearchInputStyles>
  );
};

export default SearchInput;
