/** @jsxImportSource @emotion/react */
import { useMediaQuery } from 'react-responsive'
import { css } from "@emotion/react";
import Icon from "../UI/Icon";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import { colors } from "../ui";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function SearchBar() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const location = useLocation();
  const sections = ["home", "explore", "cart", "favorites", "account"];
  const icons = {
    home: "shop",
    explore: "search",
    cart: "cart",
    favorites: "heart",
    account: "user",
  };

  const isSelected = (section) => {
    return (
      (location.pathname === "/home" && section === "home") ||
      location.pathname === `/${section}`
    );
  };

  return (
    <>
      {isDesktopOrLaptop && 
      <SyledNavbar>
          <StyledDiv>
          {sections.map((section) => (
                  <li key={section}>
                    <Link
                      className={isSelected(section) ? "selected" : ""}
                      to={section === "home" ? "/home" : `/${section}`}
                    >
                      <Icon
                        type={icons[section]}
                        fill={isSelected(section) ? colors.light2 : "black"}
                        size={20}
                      />
                      {section}
                    </Link>
                  </li>
                ))}
          </StyledDiv>
      </SyledNavbar>}
    </>
)}

const SyledNavbar = styled.div`
      display:flex;
      justify-content:space-around;
      position:absolute;
      align-items: flex-start;
      gap:30px;
      top:0;
     
      & li {
        display: flex;
        list-style: none;
        text-transform: capitalize;
        & a {
          display:flex;
          align-items: center;
          gap:5px;
          text-decoration:none;
          font-family: ABeeZee;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 47px;
          text-align: center;
          color: ${colors.dark0};
          &.selected {
            color: #5DD39E;
          }
        }
      }
`;

const StyledDiv = styled.div`
        display:flex;
        gap:50px;
`;