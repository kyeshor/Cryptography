import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  box-sizing: border-box;
  border: 0;
  border-radius: 4px;
  box-shadow: 0;
  padding: 1rem;
  height: 2.25em;
  background-color: #4fa4f4;
  color: white;
  padding: 5px;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 2px #c8e3f6;
  }
`;

const Button = ({ children, ...rest }) => {
  return (
    <Btn id="button" {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
