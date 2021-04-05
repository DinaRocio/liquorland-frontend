import { useMediaQuery } from 'react-responsive'
import { colors } from "../ui";
import styled from "@emotion/styled";
import UsersForm from "../features/users/UsersForm";
import {useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setToken } from "../features/session/sessionSlice";
import { killUsersToken } from "../features/users/usersSlice";
import BlurTemplate from "../templates/BlurTemplate";

export default function Signup() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })

  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (token) {
      dispatch(setToken({ token }));
      dispatch(killUsersToken());
      history.push("/home");
    }
  }, [token]);

  return (
    <>
    {isTabletOrMobileDevice && 
      <BlurTemplate>
        <Titles>
          <h2>Sign Up</h2>
          <p>Enter your credentials to continue</p>
        </Titles>
        <UsersForm id="signup-form" />
      </BlurTemplate>
    }
    </>
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
