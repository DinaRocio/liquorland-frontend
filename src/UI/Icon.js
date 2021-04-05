/** @jsxImportSource @emotion/react */

import { FiUser, FiMinus, FiShoppingCart, FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineShop, AiFillStar, AiOutlineStar, AiOutlineCheck } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosClose, IoMdHelpCircleOutline, IoMdNotificationsOutline } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { RiAddLine, RiBookReadLine, RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineDownload, HiLocationMarker, HiOutlinePencil } from "react-icons/hi";
import { GrShop, GrCreditCard } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin, IoLogoGithub, IoMdAt } from "react-icons/io";

import { BiCake } from "react-icons/bi";
import {FcMoneyTransfer} from "react-icons/fc";
import { BsExclamationCircle, BsFilterRight, BsHeart, BsHeartFill } from "react-icons/bs";
import { css } from "@emotion/react";


const iconSet = {
  shop: AiOutlineShop,
  heart: BsHeart,
  fillHeart: BsHeartFill,
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
  check: AiOutlineCheck,
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
  cake: BiCake,
  money: FcMoneyTransfer, 
  filter: BsFilterRight,

};

function Icon({ type, fill, size, onClick }) {
  const ComponentToRender = iconSet[type];
  return (
    <ComponentToRender
      css={css`
        color: ${fill};
        font-size: ${size}px;
        
      `}
      onClick={onClick}
    />
  );
}

export default Icon;
