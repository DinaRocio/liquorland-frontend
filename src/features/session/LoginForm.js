import Button from "../../UI/Button";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../ui";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchLogin } from "./sessionSlice";

export default function LoginForm({ id }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <Styledform onSubmit={handleSubmit} id={id}>
      <SessionError />
      <LoginInput>
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="somebody@mail.com"
          type="email"
        />
      </LoginInput>
      <LoginInput>
        <label>Password</label>
        <input value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="*********" type="password" />
      </LoginInput>
      <a href="#">Forgot Password?</a>
      <Button type="submit" form="login-form">
        Log In
      </Button>
      <SignupLink>
        Don't have an account?&nbsp;<Link to="/signup">Signup</Link>
      </SignupLink>
    </Styledform>
  );
}

const Styledform = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 25px;
  & > a {
    display: flex;
    text-decoration: none;
    font-size: 14px;
    line-height: 108.1%;
    letter-spacing: 0.05em;
    color: ${colors.dark0};
    justify-content: flex-end;
  }
`;
const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${colors.gray};
  & > label {
    font-size: 16px;
    line-height: 29px;
    color: ${colors.gray};
    font-family: "Abel", sans-serif;
  }
  & > input {
    align-items: flex-start;
    padding: 8px 0px;
    background: ${colors.white};
    color: ${colors.dark0};
    border: none;
    box-sizing: border-box;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${colors.gray};
    }
  }
`;
const SignupLink = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 108.1%;
  letter-spacing: 0.05em;
  color: ${colors.dark0};
  & > a {
    display: flex;
    text-decoration: none;
    font-size: 14px;
    line-height: 108.1%;
    letter-spacing: 0.05em;
    color: ${colors.light2};
  }
`;
