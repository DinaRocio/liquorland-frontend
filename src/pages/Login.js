import { colors } from "../ui";
import styled from "@emotion/styled";
import header from "../assets/main.png";
import { Icon, InlineIcon } from "@iconify/react";
import beerIcon from "@iconify/icons-dashicons/beer";

import LoginForm from "../features/session/LoginForm";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function Login() {

  const token= useSelector((state) => state.session.token);

  if(token){
    sessionStorage.setItem("token", token);
    return <Redirect to="/home" />
  }


  return (
    <LoginContainer>
      <Header>
        <img src={header} alt="header" />
        <Icon icon={beerIcon} />
      </Header>
      <Titles>
        <h2>Loging</h2>
        <p>Enter your email and password</p>
      </Titles>
      <LoginForm id="login-form" />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  padding: 25px;
`;

const Header = styled.div`
  width: 100vw;
  height: 23vh;
  display: flex;
  flex-direction: column;
  & > img {
    width: 100%;
    height: 100%;
    filter: blur(18px);
    -webkit-filter: blur(55px);
    z-index: 1;
  }
  & > svg {
    font-size: 110px;
    color: black;
    position: absolute;
    top: 7%;
    left: 38%;
    z-index: 2;
  }
`;
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0px 25px;
  margin-bottom: 40px;
  z-index: 1000;
  & > h2 {
    font-size: 26px;
    line-height: 29px;
    color: ${colors.dark0};
  }
  & > p {
    font-size: 16px;
    line-height: 15px;
    color: ${colors.gray};
  }
`;
