import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import Template from "../templates/Template";
import TemplateDesktop from "../templates/TemplateDesktop";
import FavoriteCard from "../components/favoriteCard";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function Favorites() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })
  const token = useSelector((state) => state.session.token)

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {isDesktopOrLaptop &&
      <Container>
        <TemplateDesktop>
          <FavoriteCard>

          </FavoriteCard>
        </TemplateDesktop>
      </Container>
      }
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

const Container =styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    margin-left:-120px;
`;

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