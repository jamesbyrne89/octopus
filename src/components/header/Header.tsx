import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  border-bottom: solid 2px var(--horizontal-line-color);

  h1 {
  }

  h2 {
    font-weight: normal;
    font-size: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <h1>Address Search</h1>

      <h2>Please enter your address</h2>
    </HeaderStyles>
  );
};

export default Header;
