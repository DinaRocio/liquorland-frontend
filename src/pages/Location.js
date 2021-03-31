/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import map from "../assets/map.svg";
import { colors } from "../ui";

import { useHistory } from "react-router";
import FullBlurTemplate from "../templates/FullBlurTemplate";


export default function Location() {
  let history = useHistory();

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
      <Input>
        <label>Your address</label>
        <input placeholder="Jr. Lalaland #432" type="text" />
      </Input>

      <div
      css = {css`
      ${mapStyles};
      `}
       id="map"></div>
      <SaveButton>Save</SaveButton>
    </FullBlurTemplate>
  );
}

const mapStyles = css`
border: 1px solid ${colors.gray2};
width: 100%;
height: 229px;
margin-top: 15px;
`

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

const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 70px;
  background-color: ${colors.light2};
  color: ${colors.white};
  outline: none;
  border: none;
  padding: 24px;
  font-size: 18px;
  line-height: 18px;
  font-family: inherit;
  border-radius: 15px;
  margin-top: 20px;
`;
