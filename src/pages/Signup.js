import { colors } from "../ui";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import header from "../assets/main.png";
import { Icon, InlineIcon } from "@iconify/react";
import beerIcon from "@iconify/icons-dashicons/beer";
import Button from "../UI/Button"

export default function Signup() {
  return (
    <SignUpContainer>
      <Header>
        <img src={header} alt="header" />
        <Icon icon={beerIcon} />
      </Header>
      <Titles>
        <h2>Sign Up</h2>
        <p>Enter your credentials to continue</p>
      </Titles>
      <StyledForm>
        <LoginInput>
          <label>Username</label>
          <input placeholder="Write your name" type="text" />
        </LoginInput>
        <LoginInput>
          <label>Birth date</label>
          <input min="1900-01-01" max="2010-12-31" type="date" required/>
        </LoginInput>
        <LoginInput>
          <label>Email</label>
          <input placeholder="somebody@mail.com" type="email" />
        </LoginInput>
        <LoginInput>
          <label>Password</label>
          <input placeholder="*********" type="password" />
        </LoginInput>
        <PolicyLink>
          <p>
            By continuing you agree to our&nbsp;
            <Anchor href="#">Terms of Service</Anchor>&nbsp;and&nbsp;
            <Anchor href="#">Privacy Policy</Anchor>
          </p>
        </PolicyLink>

        <Button>Sign Up</Button>
        <SignupLink>
          Already have an account?&nbsp;<Link to="/login">Login</Link>
        </SignupLink>
      </StyledForm>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
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
