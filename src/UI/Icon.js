/** @jsxImportSource @emotion/react */

import { FiHeart, FiUser, FiMinus, FiShoppingCart, FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineShop, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosClose, IoMdHelpCircleOutline, IoMdNotificationsOutline } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { RiAddLine, RiBookReadLine, RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineDownload, HiLocationMarker, HiOutlinePencil } from "react-icons/hi";
import { GrShop, GrCreditCard } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin, IoLogoGithub, IoMdAt } from "react-icons/io";

import { BsExclamationCircle } from "react-icons/bs";

import { css } from "@emotion/react";
import { colors } from "../ui";

const iconSet = {
  shop: AiOutlineShop,
  heart: FiHeart,
  location: HiLocationMarker,
  cart: FiShoppingCart,
  user: FiUser,
  fillStar: AiFillStar,
  outLineStar: AiOutlineStar,
  search: FiSearch,
  backArrow: IoIosArrowBack,
  downArrow: IoIosArrowDown,
  forwardArrow: IoIosArrowForward,
  add: RiAddLine,
  minus: FiMinus,
  close: IoIosClose,
  download: HiOutlineDownload,
  pencil: HiOutlinePencil,
  bag: GrShop,
  creditCard: GrCreditCard,
  details: RiBookReadLine,
  location: HiLocationMarker,
  help: IoMdHelpCircleOutline,
  about: BsExclamationCircle,
  logout: FiLogOut,
  notifications: IoMdNotificationsOutline,
  orders: RiShoppingBagLine,
  discount: IoTicketOutline,
  facebook: IoLogoFacebook,
  likendin: IoLogoLinkedin,
  github: IoLogoGithub,
  arroba: IoMdAt,
};

function Icon({ type, fill, size }) {
  const ComponentToRender = iconSet[type];
  return (
    <ComponentToRender
      css={css`
        color: ${fill};
        font-size: ${size}px;
      
      `}
    />
  );
}

export default Icon;
