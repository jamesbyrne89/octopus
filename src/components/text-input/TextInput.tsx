import { ReactNode } from "react";
import styled from "styled-components";
import { InputLabelStyles } from "../../App";

const TextInputStyles = styled.div`
  margin-top: 1rem;

  input {
    box-sizing: border-box;
    background: none;
    border: solid 1px white;
    line-height: 2.5;
    color: white;
    padding: 0 1rem;
    width: 100%;
    font-size: 0.875rem;
  }
`;

interface TextInputProps {
  placeholder?: string;
  label: ReactNode;
  register: any;
  name?: string;
  testId: string;
}

const TextInput = ({
  placeholder,
  label,
  name,
  register,
  testId,
}: TextInputProps) => {
  return (
    <TextInputStyles>
      <InputLabelStyles>
        <span>{label}</span>
        <input
          data-testid={testId}
          type="text"
          name={name}
          ref={register}
          placeholder={placeholder}
        />
      </InputLabelStyles>
    </TextInputStyles>
  );
};

export default TextInput;
