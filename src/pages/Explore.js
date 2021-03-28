import CardCategory from "../components/CardCategory"
import Template from "../templates/Template"
import Search from "../components/Search"
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function Explore() {
  const token = useSelector((state) => state.session.token)

  if (!token) {
    return <Redirect to="/login" />;
  }
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