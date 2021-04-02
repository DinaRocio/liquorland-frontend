import { colors } from "../ui";
import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import gps from "../assets/gps.svg";
import beerIcon from "@iconify/icons-dashicons/beer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../features/users/usersSlice";

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const profile = useSelector((state) => state.users.profile);
  const status = useSelector((state) => state.users.status);

  if (status === "idle") {
    dispatch(fetchProfile(token));
  }

  return (
    <StyledHeader>
      <Icon icon={beerIcon} />
      <LocationTitle>
        <img src={gps} />
        <p>{profile.direction}</p>
      </LocationTitle>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 20px;
  & > svg {
    font-size: 45px;
    color: ${colors.dark0};
  }
`;
const LocationTitle = styled.div`
  display: flex;
  gap: 4px;
  font-family: Abel;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #4c4f4d;
  & > img {
    width: 20px;
  }
`;