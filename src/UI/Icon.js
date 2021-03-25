/** @jsxImportSource @emotion/react */

import { FiHeart, FiUser, FiMinus, FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiOutlineShop, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";
import { HiOutlineDownload, HiLocationMarker, HiOutlinePencil } from "react-icons/hi";
import { GrShop, GrCreditCard } from "react-icons/gr";
import {FaMapMarkerAlt} from  "react-icons/fa";

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
  point: FaMapMarkerAlt,
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
