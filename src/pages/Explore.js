import { useMediaQuery } from 'react-responsive'
import CardCategory from "../components/CardCategory"
import Template from "../templates/Template"
import TemplatePage from "../templates/TemplatePage";
import Search from "../components/Search"
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

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
      <TemplatePage>
        <Search />
      </TemplatePage>
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
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    text-align:center;
    margin-bottom:10px;
`;