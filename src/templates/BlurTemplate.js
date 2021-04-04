import styled from "@emotion/styled";
import headerImage from "../assets/main.png";
import { Icon } from "@iconify/react";
import beerIcon from "@iconify/icons-dashicons/beer";

export default function BlurTemplate({ children, header, headerSize }) {
  const imageClass = headerSize === "large" ? "image--big" : "";

  return (
    <Template>
      <Header>
        <img src={headerImage} alt="header" className={imageClass} />
        <div>{header ? header : <Icon icon={beerIcon} />}</div>
      </Header>
      <Content>{children}</Content>
    </Template>
  );
}

const Template = styled.div`
  padding: 0 25px;

  position: relative;
  background: white;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  & > img {
    width: 100%;
    height: 220px;
    filter: blur(18px);
    -webkit-filter: blur(55px);
    &.image--big {
      height: 380px;
    }
  }
  & > div {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    svg {
      font-size: 110px;
      color: black;
    }
  }
`;

const Content = styled.main`
  max-width: 400px;
  margin: 0 auto;
  padding-bottom: 50px;
`;
