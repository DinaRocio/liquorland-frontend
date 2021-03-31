import { colors } from "../ui";
import styled from "@emotion/styled";
import header from "../assets/main.png";
import { Icon, InlineIcon } from "@iconify/react";
import beerIcon from "@iconify/icons-dashicons/beer";

export default function BlurTemplate({ children}) {
  return (
    <Template>
      <Header>
        <img src={header} alt="header" />
        <Icon icon={beerIcon} />
      </Header>
      {children}
    </Template>
  );
}

const Template = styled.div`
  padding: 25px;
`;
const Header = styled.div`
  width: 100vw;
  height: 23vh;
  display: flex;
  flex-direction: column;
  & > img {
    width: 100%;
    height: 100%;
    filter: blur(18px);
    -webkit-filter: blur(55px);
    z-index: 1;
  }
  & > svg {
    font-size: 110px;
    color: black;
    position: absolute;
    top: 7%;
    left: 38%;
    z-index: 2;
  }
`;
