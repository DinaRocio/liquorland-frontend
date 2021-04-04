import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FormButton } from "../../UI/Button";
import { colors } from "../../ui";
import { useState } from "react";
import { fetchSignup } from "./usersSlice";
import { useDispatch } from "react-redux";
import UsersError from "./UsersError";

export default function UsersForm({ id }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    birth_date: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignup(form));
  };

  const { name, birth_date, email, password } = form;

  return (
    <StyledForm onSubmit={handleSubmit} id={id}>
      <UsersError />
      <LoginInput>
        <label>Username</label>
        <input
          value={name}
          name="name"
          placeholder="Write your name"
          type="text"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </LoginInput>
      <LoginInput>
        <label>Birth date</label>
        <input
          min="1900-01-01"
          max="2010-12-31"
          type="date"
          value={birth_date}
          name="birth_date"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          required
        />
      </LoginInput>
      <LoginInput>
        <label>Email</label>
        <input
          placeholder="somebody@mail.com"
          value={email}
          name="email"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          type="email"
        />
      </LoginInput>
      <LoginInput>
        <label>Password</label>
        <input
          placeholder="*********"
          value={password}
          name="password"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          type="password"
        />
      </LoginInput>
      <PolicyLink>
        <p>
          By continuing you agree to our&nbsp;
          <Anchor href="#">Terms of Service</Anchor>&nbsp;and&nbsp;
          <Anchor href="#">Privacy Policy</Anchor>
        </p>
      </PolicyLink>

      <FormButton type="submit" form="signup-form">
        Sign Up
      </FormButton>
      <SignupLink>
        Already have an account?&nbsp;<Link to="/login">Login</Link>
      </SignupLink>
    </StyledForm>
  );
}

const StyledForm = styled.form`
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
const PolicyLink = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${colors.gray};
`;
const Anchor = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 108.1%;
  letter-spacing: 0.05em;
  color: ${colors.light2};
`;
