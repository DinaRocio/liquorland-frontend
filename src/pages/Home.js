import { Redirect } from "react-router";
import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import Template from "../templates/Template";
import Footer from "../components/Footer";
import Search from "../components/Search"
import Card from "../components/Card";
import { colors } from "../ui";
import Header from "../components/Header"
import TemplateDesktop from "../templates/TemplateDesktop";
import  Carussel from "../components/Carousel";
import CardCategory from "../components/CardCategory";
import bebida from "../assets/bebida.svg";
import girls from ".././assets/girls.jpg"
import { useDispatch, useSelector } from "react-redux";
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
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
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
    <>
        {isDesktopOrLaptop && 
        <Container>
            <TemplateDesktop>
            <Carussel />
              <StyledHeading>
                <Heading>Our Categories</Heading>
              </StyledHeading>
              <CardCategory/>
              <StyledHeading>
                <Heading>Popular products</Heading>
              </StyledHeading>
              <ContainerCard>
                <Card
                  src={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
                <Card
                  src={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
                <Card
                  src={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
                <Card
                  src={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
              </ContainerCard>
              <Footer/>
            </TemplateDesktop>
          </Container>
        }

        {isTabletOrMobileDevice && 
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
        }
    </>
    
  );
}

// styles for desktop
const StyledHeading= styled.div`
  margin:25px;
  margin-top:45px;
  width:100%;
  height:70px;
  color:white;
  background-color:${colors.light2};
`;

const Heading = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
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

const StyledFooter = styled.div`
    display:flex;
    position:absolute;
    bottom:0;
    justify-content:center;
`;

const Container = styled.div`
   display:flex;
   width:100%;
   margin-top:-100;
`;

// styles for mobile
const ImgB = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 30px;
`;
