import { useMediaQuery } from 'react-responsive'
import CardCategory from "../components/CardCategory"
import Template from "../templates/Template"
import TemplateDesktop from "../templates/TemplateDesktop";
import Search from "../components/Search"
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import  Carousel from "../components/Carousel";

export default function Explore() {
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
      <TemplateDesktop>
        <Carousel />
      </TemplateDesktop>
      }
      {isTabletOrMobileDevice && 
      <Template>
        <Heading>Find Products</Heading>
        <Search />
        <CardCategory/>
      </Template>
      }
    </>
)};

const Heading = styled.h3`
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    text-align:center;
    margin-bottom:10px;
`;