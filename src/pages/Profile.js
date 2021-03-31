/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";
import { useHistory } from "react-router";
import FullBlurTemplate from "../templates/FullBlurTemplate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../features/users/usersSlice";
import Icon from "../UI/Icon";

export default function Profile() {
  let history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const profile = useSelector((state) => state.users.profile);
  const status = useSelector((state) => state.users.status);

  if (status === "idle") {
    dispatch(fetchProfile(token));
  }

  return (
    <ProfileTemplate>
      <Icon
        type="backArrow"
        fill="black"
        size={60}
        onClick={() => history.goBack()}
      />
      <div className="profile-avatar">
        <AvatarContainer avatarUrl={profile.avatar_url}></AvatarContainer>
      </div>
      <ProfileContent>
        <Title>
          <p className="profile-name">{profile.name}</p>
          <p className="profile-email">{profile.email}</p>
        </Title>
        <div>
          <ProfileOption>
            <p>My current Location: </p>
            <div>
              <Icon type="location" fill="black" size={20} />
              <p>{profile.direction}</p>
            </div>
          </ProfileOption>
          <ProfileOption>
            <p>My Birth Date: </p>
            <div>
              <Icon type="cake" fill="black" size={20} />
              <p>{profile.birth_date}</p>
            </div>
          </ProfileOption>
        </div>
        <MyShop>
          <Feature>
            <h3>My Favorite</h3>
            <p>4</p>
          </Feature>
          <Feature>
            <h3>My Cart</h3>
            <p>10</p>
          </Feature>
        </MyShop>
      </ProfileContent>
    </ProfileTemplate>
  );
}

const ProfileTemplate = styled.div`
  background: linear-gradient(
    180deg,
    #32de84 0%,
    rgba(50, 222, 132, 0.6) 46.9%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .profile-avatar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    gap: 40px;
    padding: 28px;
  }
`;
const AvatarContainer = styled.div(
  ({ avatarUrl, cssProp }) => css`
  
    width: 70%;
    height: 100%;
    border-radius: 17px;
    background-image: url(${avatarUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${colors.light2};
    border: none;
    ${cssProp}
  `
);

const ProfileContent = styled.div`
  background-color: ${colors.white};
  width: 100vw;
  padding: 30px;
  box-shadow: 0px -5px 25px #c4c4c4;
  border-radius: 40px 40px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  .profile-name {
    font-size: 38px;
    line-height: 45px;
  }
  .profile-email {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 38px;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`;
const ProfileOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > p {
    font-size: 18px;
    line-height: 26px;
    color: ${colors.gray};
  }
  & > div {
    display: flex;
    font-size: 22px;
    line-height: 26px;
    color: ${colors.dark0};
    gap: 7px;
  }
`;
const MyShop = styled.div`
  display: flex;
  gap: 30px;
`;
const Feature = styled.div`
  box-shadow: 4px 3px 8px 1px #969696;
  padding: 7px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h3 {
    font-style: italic;
    font-weight: normal;
    font-size: 25px;
    line-height: 35px;
  }
`;
