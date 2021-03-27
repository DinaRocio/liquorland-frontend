/** @jsxImportSource @emotion/react */
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { css } from "@emotion/react";
import Icon from "./Icon";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import { colors } from "../ui";
import { Link } from "react-router-dom";

export default function Navbar() {
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
    <ul
      css={css`
        position: absolute;
        background: ${colors.white};
        bottom: 0;
        width: 100%;
        left:0;
        height: 92px;
        list-style-type: none;
        margin: 0;
        padding: 16px 20px;
        border-radius:22px 22px 0 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 10;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          font-size: 12px;
          line-height: 14px;
          color: ${colors.dark0};
          &.selected {
            color: ${colors.light1};
          }
        }
      `}
    >
      {sections.map((section) => (
        <li key={section}>
          <Link
            className={isSelected(section) ? "selected" : ""}
            to={section === "home" ? "/home" : `/${section}`}
          >
            <Icon
              type={icons[section]}
              fill={isSelected(section) ? colors.light1 : "black"}
              size={20}
            />
            {section}
          </Link>
        </li>
      ))}
    </ul>
  );
}
