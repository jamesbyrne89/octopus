import { ReactNode } from "react";
import styled from "styled-components";

const TextInputStyles = styled.div`
  margin-top: 2rem;
  color: white;
  text-align: left;

  span {
    display: block;
  }

  input {
    background: transparent;
    border: solid 1px white;
    line-height: 2.5;
    color: white;
    padding: 0 1rem;
    margin-top: 1rem;
    width: 100%;
  }
`;

interface TextInputProps {
  placeholder?: string;
  label: ReactNode;
  register: any;
  name?: string;
}

const TextInput = ({ placeholder, label, name, register }: TextInputProps) => {
  return (
    <TextInputStyles>
      <label>
        <span>{label}</span>
        <input
          type="text"
          name={name}
          ref={register}
          placeholder={placeholder}
        />
      </label>
    </TextInputStyles>
  );
};

export default TextInput;
