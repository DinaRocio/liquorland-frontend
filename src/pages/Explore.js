import { useMediaQuery } from 'react-responsive'
import CardCategory from "../components/CardCategory"
import Template from "../templates/Template"
import Navbar from "../UI/Navbar";
import Search from "../components/Search"
import Footer from "../components/Footer";
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
      <Content>
        <Navbar/>
        <div className="search">
          <Search/>
        </div>
        <div className="content">
          <CardCategory/>
        </div>
        <div className="foo"><Footer/></div>
      </Content>
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

const Content = styled.h3`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    & > .search {
      display:flex;
      margin-top:120px;
    }
    & > .content {
      display:flex;
      margin-top:-55px;
      margin-right:680px;
    }
    & > .foo {
      display:flex;
      align-items:center;
      position:absolute;
      bottom:0;
    }
`;

const Heading = styled.h3`
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    text-align:center;
    margin-bottom:10px;
`;