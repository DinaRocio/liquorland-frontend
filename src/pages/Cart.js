import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import  CardCart from "../components/CardCart";
import Template from "../templates/Template";
import TemplateDesktop from "../templates/TemplateDesktop";

export default function Cart() {
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
          <Tittle>Shopping cart</Tittle>
          <Table>
            <p>Products</p>
            <p>Detail</p>
            <p>Amount</p>
          </Table>
          <CardCart/>
        </TemplateDesktop>
      }
      {isTabletOrMobileDevice && 
        <Template>
          <Heading>My Cart</Heading>
          <Overlay/>
            <CardCart/>
        </Template>
      }
    </>
  );
}

const Table = styled.p`
    display:flex;
    flex-direction:row;
    margin-top:30px;
    margin-left:162px;
    gap:210px;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 18px;
    color: #181725;
`;

const Tittle = styled.p`
    margin-top:25px;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 18px;
    color: #181725;
    margin-left:20px;
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