import styled from "styled-components";

interface ButtonProps {
  text: string;
}

const ButtonStyles = styled.button`
  line-height: 3.5;
  padding: 0 6rem;
  border-radius: 3.5rem;
  background: white;
  color: var(--gradient-color-two);
  border: solid 1px var(--gradient-color-two);
  font-weight: bold;
  cursor: pointer;
`;

const Button = ({ text }: ButtonProps) => (
  <ButtonStyles data-testid="address-form-submit-btn">{text}</ButtonStyles>
);

export default Button;
