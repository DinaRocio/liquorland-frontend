import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import Template from "../templates/Template";
import FavoriteCard from "../components/favoriteCard";

export default function Favorites() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })
  return (
    <>
      {isTabletOrMobileDevice && 
        <Template>
          <Heading>Favorites</Heading>
          <Overlay/>
          <FavoriteCard />
        </Template>
      }
    </>
  );
}

const Heading = styled.h3`
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    text-align:center;
    margin-bottom:10px;
`;

const Overlay =styled.div`
      color:#E2E2E2;
      width:940px;
      height:14px;
      border-bottom:1px solid;
      margin-top:32px;
      margin-bottom:15px;
`;