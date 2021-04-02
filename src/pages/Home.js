import styled from "@emotion/styled";
import Template from "../templates/Template";
import Search from "../components/Search";
import { Card, Price } from "../components/Card";
import coke from "../assets/coke.png";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import girls from ".././assets/girls.jpg";
import SpecialSection from "../components/SpecialSection";

export default function Home() {
  const token = useSelector((state) => state.session.token);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Template>
      <Header />
      <Search />
      <ImgB alt="upload icon" src={girls} />
      <section>
        <SpecialSection />
        <SpecialSection />
      </section>
    </Template>
  );
}

const ImgB = styled.img`
  /* background-image: url("https://res.cloudinary.com/dtrjltklc/image/upload/v1616683359/branding_1_iliiaj.png"); */
  object-fit: cover;
  width: 100%;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 30px;
`;
