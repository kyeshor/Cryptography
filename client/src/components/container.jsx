import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  background: white;
  min-height: 300px;
  width: 100%;
  padding: 5px;
  overflow-y: auto;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  scrollbar-color: #2e2e2e #aeaeae;
  scrollbar-width: thin;
  margin-bottom: 5px;

  &:focus {
    outline: none !important;
  }

  overflow-x: hidden;
`;

const Container = ({ children, ...rest }) => {
  return <ContainerDiv {...rest}>{children}</ContainerDiv>;
};

export default Container;
