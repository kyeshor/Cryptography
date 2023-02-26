import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Chat from "./components/chat/chat";
import LoginForm from "./components/forms/login/loginForm";
import RegisterForm from "./components/forms/register/registerForm";
import styled from "styled-components";

const AppDiv = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:Center;
  align-items:center;
  height:100vh;
  * {
    border-radius: 5px;
  }

  a {
    font-size: 12px;
    color: #4FA4F4;
  }
`;

function App() {
  return (
    <AppDiv>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Redirect from="/" to="/login" />
      </Switch>
    </AppDiv>
  );
}

export default App;
