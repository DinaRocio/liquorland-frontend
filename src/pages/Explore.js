import CardCategory from "../components/CardCategory"
import Template from "../templates/Template"
import Search from "../components/Search"
import styled from "@emotion/styled";
import Navbar from "../UI/Navbar"

export default function Explore() {
  return (
    <Template>
      <Heading>Find Products</Heading>
      <Search/>
      <CardCategory/>
    </Template>
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