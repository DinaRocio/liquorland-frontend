import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import Template from "../templates/Template";
import TemplateDesktop from "../templates/TemplateDesktop";
import Footer from "../components/Footer";
import bebida from "../assets/bebida.svg";
import FavoriteCard from "../components/favoriteCard";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect } from "react";
import { fetchIndexFavorites } from "../features/favorites/favoriteSlice";

export default function Favorites() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })
  const token = useSelector((state) => state.session.token)
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.list);
  const favoriteState = useSelector((state) => state.favorite.status);

  useEffect((_) => {
    if (token) dispatch(fetchIndexFavorites(token));
  }, []);

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {isDesktopOrLaptop &&
      <Container>
        <TemplateDesktop>
          <ContainerCard>
            <FavoriteCard
               setURL={bebida}
               name={"Trappistes"}
               presentation={"Lata 335 ml."}
               price={"12.99"}
            />
            <FavoriteCard
               setURL={bebida}
               name={"Trappistes Rochefort 8"}
               presentation={"Lata 335 ml."}
               price={"12.99"}
            />
            <FavoriteCard
               setURL={bebida}
               name={"Trappistes Rochefort 8"}
               presentation={"Lata 335 ml."}
               price={"12.99"}
            />
            <FavoriteCard
               setURL={bebida}
               name={"Trappistes Rochefort 8"}
               presentation={"Lata 335 ml."}
               price={"12.99"}
            />
            <FavoriteCard
               setURL={bebida}
               name={"Trappistes Rochefort 8"}
               presentation={"Lata 335 ml."}
               price={"12.99"}
            />
          </ContainerCard>
          <StyledFooter>
            <Footer/>
          </StyledFooter>
        </TemplateDesktop>
      </Container>
      }
      {isTabletOrMobileDevice && 
         <Template>
         <Heading>Favorites</Heading>
   
         {favoriteState.index === "loading" && <span>Loading ...</span>}
         {favoriteState.index === "failed" && <span>Something was wrong</span>}
         {favoriteState.index === "success" &&
           favoriteList.map((favoriteItem) => (
             <FavoriteCard key={favoriteItem.id} favorite={favoriteItem} />
           ))}
       </Template>
      }
    </>
  );
}

const ContainerCard = styled.div`
    display:grid;
    margin-top:50px;
    margin-bottom:50px;
    grid-template-columns:repeat(4, 300px);
    grid-template-rows: repeat(autofill, 370px);
    grid-gap:15px;
`;

const StyledFooter = styled.div`
    display:flex;
    bottom:0;
    justify-content:center;
`;

const Container =styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    margin-left:-120px;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 0px 32px;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
`;
