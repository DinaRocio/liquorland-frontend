import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import Template from "../templates/Template";
import Search from "../components/Search"
import {Card, Price} from "../components/Card";
import coke from "../assets/coke.png"
import Header from "../components/Header"
<<<<<<< HEAD
import TemplateDesktop from "../templates/TemplateDesktop";
import CardCategory from "../components/CardCategory";
import bebida from "../assets/bebida.svg";
=======
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import girls from ".././assets/girls.jpg"
>>>>>>> e2fdb9f64871ffe0efdf197dfcff153d3e0dcac5

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  const token = useSelector((state) => state.session.token)

  if (!token ) {
    return <Redirect to="/login" />;
  }

  return (
    <>
        {isDesktopOrLaptop && 
          <TemplateDesktop>
            <Search/>
            <CardCategory/>
            <Heading>Popular products</Heading>
            <Card
              src={bebida}
              name={"Trappistes Rochefort 8"}
              presentation={"Lata 335 ml."}
            />
          </TemplateDesktop>
        }

        {isTabletOrMobileDevice && 
          <Template>
            <Header/>
            <Search/>
            <ImgB/>
            <Information>
              <p>Exclusive Offers</p>
              <a href="#" >See all</a>
            </Information>
            <Card>
              <img src={coke}/>
              <h5>Diet Coke</h5>
              <p>355ml</p>
              <Price>$1.99</Price>
            </Card>
            <Information>
              <p>Best selling</p>
              <a href="#" >See all</a>
            </Information>
            <Card>
              <img src={coke}/>
              <h5>Diet Coke</h5>
              <p>355ml</p>
              <Price>$1.99</Price>
            </Card>
          </Template>
        }
    </>
    
  );
}

// styles for desktop
const Heading =styled.p`

`;
// styles for mobile
const ImgB = styled.img`
  /* background-image: url("https://res.cloudinary.com/dtrjltklc/image/upload/v1616683359/branding_1_iliiaj.png"); */
  object-fit: cover;
  width: 100%;
  height:150px;
  margin-top: 10px;
`;
const Information = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10px;
    & p {
      font-family: Abel;
      font-style: normal;
      font-weight: normal;
      font-size: 23px;
      line-height: 31px;
    }
    & a{
      font-family: Abel;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #53B175;
      text-decoration:none;
    }
`;