<<<<<<< HEAD
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import Template from "../templates/Template";
import Search from "../components/Search"
import Card from "../components/Card";
import { colors } from "../ui";
import coke from "../assets/coke.png"
import Header from "../components/Header"
import TemplateDesktop from "../templates/TemplateDesktop";
import  Carussel from "../components/Carousel";
import CardCategory from "../components/CardCategory";
import bebida from "../assets/bebida.svg";
import girls from ".././assets/girls.jpg"

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
=======
import styled from "@emotion/styled";
import Template from "../templates/Template";
import Search from "../components/Search";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import girls from ".././assets/girls.jpg";
import SpecialSection from "../components/SpecialSection";
import CategorySlider from "../components/CategorySlider";
import {
  fetchBestSelling,
  fetchHighestRated,
  fetchTopRecent,
} from "../features/categories/categoriesSlice";
import { useEffect } from "react";
import { fetchIndexFavorites } from "../features/favorites/favoriteSlice";

export default function Home() {
  const dispatch = useDispatch();
>>>>>>> 6ee617259bfb97027a2f41c1491cdccc560e09ba
  const token = useSelector((state) => state.session.token);
  const bestSelling = useSelector((state) => state.categories.bestSellingItems);
  const topRecent = useSelector((state) => state.categories.topRecentItems);
  const highestRated = useSelector(
    (state) => state.categories.highestRatedItems
  );
  const statusSpecialCategory = useSelector(
    (state) => state.categories.statusSpecialCategory
  );

  useEffect(() => {
    dispatch(fetchBestSelling());
    dispatch(fetchTopRecent());
    dispatch(fetchHighestRated());
  }, []);


  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
<<<<<<< HEAD
    <>
        {isDesktopOrLaptop && 
          <TemplateDesktop>
           <Carussel />
            <CardCategory/>
            <StyledHeading>
              <Heading>Popular products</Heading>
            </StyledHeading>
            <ContainerCard>
              <Card
                src={bebida}
                name={"Trappistes Rochefort 8"}
                presentation={"Lata 335 ml."}
              />
              <Card
                src={bebida}
                name={"Trappistes Rochefort 8"}
                presentation={"Lata 335 ml."}
              />
              <Card
                src={bebida}
                name={"Trappistes Rochefort 8"}
                presentation={"Lata 335 ml."}
              />
              <Card
                src={bebida}
                name={"Trappistes Rochefort 8"}
                presentation={"Lata 335 ml."}
              />
            </ContainerCard>
          </TemplateDesktop>
        }

        {isTabletOrMobileDevice && 
          <Template>
            <Header />
            <Search />
            <ImgB alt="upload icon" src={girls} />
            <Information>
              <p>Exclusive Offers</p>
              <a href="#">See all</a>
            </Information>
            {/* <Card>
              <img src={coke} />
              <h5>Diet Coke</h5>
              <p>355ml</p>
              <Price>$1.99</Price>
            </Card>
            <Information>
              <p>Best selling</p>
              <a href="#">See all</a>
            </Information>
            <Card>
              <img src={coke} />
              <h5>Diet Coke</h5>
              <p>355ml</p>
              <Price>$1.99</Price>
            </Card> */}
        </Template>
        }
    </>
    
=======
    <Template>
      <Header />
      <Search />
      <ImgB alt="upload icon" src={girls} />
      <section>
        <SpecialSection
          category={bestSelling}
          state={statusSpecialCategory.bestSelling}
        />
        <CategorySlider />
        <SpecialSection
          category={topRecent}
          state={statusSpecialCategory.topRecent}
        />
        <SpecialSection
          category={highestRated}
          state={statusSpecialCategory.highestRated}
        />
      </section>
    </Template>
>>>>>>> 6ee617259bfb97027a2f41c1491cdccc560e09ba
  );
}

// styles for desktop
const StyledHeading= styled.div`
  margin:25px;
  margin-top:45px;
  width:100%;
  height:70px;
  background-color:${colors.gray2};
`;

const Heading = styled.div`
    display:flex;
    justify-content:center;
    margin-top:25px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 72px;
`;

const ContainerCard = styled.div`
    display:grid;
    margin:20px;
    margin-bottom:300px;
    grid-template-columns: repeat(4, 350px);
    grid-template-rows: repeat(autofill, 400px);
    grid-gap: 12px;
`;

// styles for mobile
const ImgB = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 30px;
`;
