/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import map from "../assets/map.svg";
import { colors } from "../ui";
import FullBlurTemplate from "../templates/FullBlurTemplate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, FetchUpdateProfile } from "../features/users/usersSlice";
import { useState } from "react";
import Button from "../UI/Button";

export default function Location() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const profile = useSelector((state) => state.users.profile);
  const status = useSelector((state) => state.users.status);

  if (status === "idle") {
    dispatch(fetchProfile(token));
  }

  const [form, setForm] = useState({
    direction: profile.direction,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData();
    for (let key in form){
      fd.append(key, form[key]);
    }
    dispatch(FetchUpdateProfile({fd, token}));
  };

  const { direction } = form;

  return (
    <FullBlurTemplate>
      <LocationHeader>
        <img src={map} alt="mapIcon" />
        <Titles>
          <h5>Select Your Location</h5>
          <p>
            Switch on your location to stay in tune with what’s happening in
            your area
          </p>
        </Titles>
      </LocationHeader>
      <LocalForm onSubmit={handleSubmit}  form="locale-form">
        <Input>
          <label>Your address</label>
          <input
            placeholder="Jr. Lalaland #432"
            type="text"
            value={direction}
            name="direction"
            onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}
          />
        </Input>

        <div
          css={css`
            ${mapStyles};
          `}
          id="map"
        ></div>
      
        <Button type="submit" form="locale-form">
        Save
      </Button>
      </LocalForm>
    </FullBlurTemplate>
  );
}

const LocalForm = styled.form``;

const mapStyles = css`
  border: 1px solid ${colors.gray2};
  width: 100%;
  height: 229px;
  margin-top: 15px;
`;

const LocationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  gap: 20px;
  & > img {
    width: 225px;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > h5 {
    font-size: 26px;
    line-height: 29px;
    color: ${colors.dark0};
  }
  & > p {
    font-size: 16px;
    line-height: 15px;
    color: ${colors.gray};
    text-align: center;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
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