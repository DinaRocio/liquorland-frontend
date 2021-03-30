import { colors } from "../ui";
import styled from "@emotion/styled";

import LoginForm from "../features/session/LoginForm";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import BlurTemplate from "../templates/BlurTemplate";

export default function Login() {
  const token = useSelector((state) => state.session.token);

  if (token) {
    sessionStorage.setItem("token", token);
    return <Redirect to="/home" />;
  }

  return (
    <BlurTemplate>
      <Titles>
        <h2>Loging</h2>
        <p>Enter your email and password</p>
      </Titles>
      <LoginForm id="login-form" />
    </BlurTemplate>
  );
}

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
