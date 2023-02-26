import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background: #ffffff;
  max-height: 425px;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  min-width: 500px;
  text-align: left !important;
`;

const Card = ({ children }) => {
  return <CardDiv>{children}</CardDiv>;
};

export default Card;
