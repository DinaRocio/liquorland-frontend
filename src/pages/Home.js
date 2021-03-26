import styled from "@emotion/styled";
import Template from "../templates/Template";
import Search from "../components/Search";
import {Card, Price} from "../components/Card";
import coke from "../assets/coke.png"
import Header from "../components/Header"

export default function Home() {
  return (
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
  );
}

const ImgB = styled.img`
  background-image: url("https://res.cloudinary.com/dtrjltklc/image/upload/v1616683359/branding_1_iliiaj.png");
  background-size:cover;
  width:280px;
  height:150px;
  margin-top: 10px;
  margin-left:20px;
  border:transparent;
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