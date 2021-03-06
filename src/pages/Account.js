import { useMediaQuery } from 'react-responsive'
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../UI/Navbar";
import { Link, Redirect } from "react-router-dom";
import { fetchLogout } from "../features/session/sessionSlice";
import { fetchProfile } from "../features/users/usersSlice";
import Template from "../templates/Template";
import TemplateDesktop from "../templates/TemplateDesktop";
import { colors } from "../ui";
import Icon from "../UI/Icon";

export default function Account ( {
  name = "Afsar Hossen",
  email = "lala@lala.com",
  avatarUrl = "https://www.trickscity.com/wp-content/uploads/2018/06/anonymous-dp-for-boys.jpg",
}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const profile = useSelector((state) => state.users.profile);
  const status = useSelector((state) => state.users.status);

  if (status === "idle") {
    dispatch(fetchProfile(token));
  }

  if (!token) {
    return <Redirect to="/login" />;
  }

  const options = ["myDetails", "location", "payment", "help", "about"];
  const iconsOpt = {
    myDetails: "details",
    location: "location",
    payment: "creditCard",
    help: "help",
    about: "about",
  };
  const titlesOpt = {
    myDetails: "My Details",
    location: "Delivery Address",
    payment: "Payment Methods",
    help: "Help",
    about: "About",
  };
  return (
    <> 
      {isDesktopOrLaptop &&
        <Container>
          <Navbar/>
          <div className="cont">
            <AccountHeader>
              <AvatarContainer avatarUrl={profile.avatar_url}></AvatarContainer>
              <AccountTitles>
                <NameEdition>
                  <p>{profile.name}</p>
                  <Link to="/edit-profile">
                    <Icon type="pencil" fill={colors.light2} size={15} />
                  </Link>
                </NameEdition>
                <p>{profile.email}</p>
              </AccountTitles>
            </AccountHeader>
            <AccountOptions>
              {options.map((option) => (
                <li key={option}>
                  <Option>
                    <Icon type={iconsOpt[option]} fill="black" size={20} />
                    <div>
                      <p>{titlesOpt[option]}</p>
                      <Link to={`/${option}`}>
                        <Icon type="forwardArrow" fill="black" size={14} />
                      </Link>
                    </div>
                  </Option>
                </li>
              ))}
            </AccountOptions>
          </div>
          <LogoutButton onClick={() => dispatch(fetchLogout(token))}>
            <Icon type="logout" fill={colors.light2} size={28} />
            Logout
            <span></span>
          </LogoutButton>
        </Container>
      }

      {isTabletOrMobileDevice &&
      <Template>
      <AccountHeader>
        <AvatarContainer avatarUrl={profile.avatar_url}></AvatarContainer>
        <AccountTitles>
          <NameEdition>
            <p>{profile.name}</p>
            <Link to="/edit-profile">
              <Icon type="pencil" fill={colors.light2} size={15} />
            </Link>
          </NameEdition>
          <p>{profile.email}</p>
        </AccountTitles>
      </AccountHeader>
      <AccountOptions>
        {options.map((option) => (
          <li key={option}>
            <Option>
              <Icon type={iconsOpt[option]} fill="black" size={20} />
              <div>
                <p>{titlesOpt[option]}</p>
                <Link to={`/${option}`}>
                  <Icon type="forwardArrow" fill="black" size={14} />
                </Link>
              </div>
            </Option>
          </li>
        ))}
      </AccountOptions>
      <LogoutButton onClick={() => dispatch(fetchLogout(token))}>
        <Icon type="logout" fill={colors.light2} size={28} />
        Logout
        <span></span>
      </LogoutButton>
    </Template>
      }
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-direction:column;
  height:800px;
  gap:80px;
  width: 100%;
  & > .cont {
    flex-direction:column;
    background-color:white;
    display:flex;
    margin:80px;
    margin-top:150px;
    padding-left:80px;
    padding-top:-5px;
  }
`;

const AccountHeader = styled.div`
  width: 80vw;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  border-bottom: 1px solid #e2e2e2;
`;

const AvatarContainer = styled.div(
  ({ avatarUrl, cssProp }) => css`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-image: url(${avatarUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${colors.light2};
    border: none;
    ${cssProp}
  `
);
const AccountTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  & > p {
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: ${colors.gray};
  }
`;
const NameEdition = styled.div`
  display: flex;
  gap: 9px;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
`;
const AccountOptions = styled.ul`
  display: flex;
  flex-direction: column;

  font-family: "Abel", sans-serif;
`;
const Option = styled.div`
  gap: 20px;
  display: flex;
  padding: 25px;
  border-bottom: 1px solid #e2e2e2;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: space-around;
  gap: 70px;
  background-color: ${colors.gray2};
  color: ${colors.light2};
  outline: none;
  border: none;
  padding: 24px;
  font-size: 18px;
  line-height: 18px;
  font-family: inherit;
  border-radius: 15px;
  align-items: center;
  margin: 40px auto 20px;
`;
