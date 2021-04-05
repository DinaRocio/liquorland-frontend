import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import { colors, screenMediaQueries, screenSizes } from "../ui";
import Button from "../UI/Button";
import { FaChevronDown, FaChevronUp, FaMinus, FaPlus } from "react-icons/fa";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { fetchDrink } from "../features/drinks/drinksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import TemplateDesktop from "../templates/TemplateDesktop";
import Icon from "../UI/Icon";
import Reviews from "../components/Reviews";
import { Stars } from "../components/Stars";
import { SubTitleGrayStyled, SubTitleStyled, TitleL, TextM } from "../UI/Text";
import { fetchCreateFavorite, fetchDeleteFavorite } from "../features/favorites/favoriteSlice";
import { fetchCreateCart } from "../features/cart/cartSlice";

export default function ProductDetail() {
  const token = useSelector((state) => state.session.token);
  const favoriteList = useSelector((state) => state.favorite.list);
  const drink = useSelector((state) => state.drinks.drink);
  const show_drink_state = useSelector((state) => state.drinks.status.show);
  const [toggle, setToggle] = useState(false);
  const { drink_id } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })
  const [favorite, setFavorite ] = useState(null);
  const [count, setCount] = useState(0)

  /** Loading Drink */
  useEffect(() => {
    dispatch(fetchDrink(drink_id));
  }, []);

  useEffect(() => {
    setFavorite(favoriteList.find((favoriteItem) => favoriteItem.drink.id === parseInt(drink_id)  ))
  }, [favoriteList])

  const ToggleIcon = [FaChevronUp, FaChevronDown][toggle ? 0 : 1];

  const handleToggle = () => setToggle(!toggle);

  const handleAddItem = () => {
    dispatch(fetchCreateFavorite({token, drink_id}))
  }

  const handleRemoveItem = () => {
    dispatch(fetchDeleteFavorite({token, favoriteId: favorite.id}))
  }
  
  const handleAddToCart = () => {
     console.log(count, drink_id)
    dispatch(fetchCreateCart({token, data: {"drink_id": drink_id, "quantity": count}  }))
  }

  return (
    
       {isDesktopOrLaptop && 
        <TemplateDesktop>
          
        </TemplateDesktop>
       }
         
      {isTabletOrMobileDevice &&
          <TemplateOne>
      <NavToStyled>
        <Icon
          type="backArrow"
          fill="black"
          size={20}
          onClick={() => history.push("/home")}
        />
      </NavToStyled>
      <ContainerStyled>
        {show_drink_state === "LOADING" && "cargando..."}
        {show_drink_state === "ERROR" && "Something went wrong"}
        {show_drink_state === "SUCCESS" && (
          <>
            <Image src={drink.image_url} />
            <HeadStyled>
              <TitleL>{drink.name}</TitleL>
              {favorite ? (
                <BsHeartFill color="red" className="icon-button" onClick={handleRemoveItem} />
               ) : (
                <BsHeart color="red" className="icon-button" onClick={handleAddItem} />
              )} 
              <SubTitleGrayStyled>{drink.presentation}</SubTitleGrayStyled>
            </HeadStyled>
            <AmountContainer>
              <div className="change-quantity">
                <FaMinus className="icon-button" onClick={() => setCount(count - 1)} />
                <input value={count} name="quantity" onChange={() => {}} />
               
                <FaPlus className="icon-button" onClick={() => setCount(count + 1)}/>
              </div>
              <TextM>${drink.price}</TextM>
            </AmountContainer>
            <div>
              <ProductDetailStyled>
                <SubTitleStyled>Product Detail</SubTitleStyled>
                <p>{drink.description}</p>
              </ProductDetailStyled>
              <ProductDetailStyled className="one-line">
                <SubTitleStyled>Alcohol Grades</SubTitleStyled>
                <p className="box-light">{drink.alcohol_grades}%</p>
              </ProductDetailStyled>
              <ProductDetailStyled className="one-line">
                <SubTitleStyled>Review({drink.reviews_count})</SubTitleStyled>
                <IconsContainerStyled>
                  <Stars rating={drink.rating_avg} />
                  <ToggleIcon onClick={handleToggle} className="icon-button" />
                </IconsContainerStyled>
              </ProductDetailStyled>
              {toggle && <Reviews data={drink.reviews} />}
            </div>
          </>
        )}
      </ContainerStyled>
      <FooterStyled>
        <Button onClick={handleAddToCart}>Add to Basquet</Button>
      </FooterStyled>
    </TemplateOne>
      }
    </>
  );
}

const TemplateOne = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 95%;
  max-width: ${screenSizes.lg};

  display: grid;
  top: 0;
  grid-template-rows: 60px calc(100% - 135px) 75px;

  ${screenMediaQueries.sm} {
  }
  ${screenMediaQueries.md} {
  }
  ${screenMediaQueries.lg} {
  }
  ${screenMediaQueries.xl} {
  }
`;

const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: ${screenSizes.md};
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .icon-button {
    font-size: 20px;
    color: ${colors.dark0};
    cursor: pointer;
  }
`;

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  & > * {
    width: 100%;

    ${screenMediaQueries.sm} {
      width: 240px;
    }
  }
`;

const NavToStyled = styled.nav`
  font-size: 18px;
  padding: 10px 0px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 350px;
  border: none;
  object-fit: contain;
  border-radius: 8px;
  align-self: center;
`;

const HeadStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10.5px 4px;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .change-quantity {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    color: ${colors.dark0};

    input {
      width: 45.67px;
      height: 45.67px;

      border: 1px solid ${colors.gray};
      box-sizing: border-box;
      border-radius: 17px;

      font-family: Abel;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 18px;

      display: flex;
      text-align: center;

      color: ${colors.dark0};
    }
  }
`;

const ProductDetailStyled = styled.div`
  border-top: 1px solid ${colors.gray2};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 9.5px;

  &.one-line {
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    text-transform: capitalize;
    color: ${colors.gray};

    &.box-light {
      background-color: ${colors.gray3};
      border-radius: 5px;
      min-width: 45px;
      text-align: center;
      padding: 1px;
    }
  }
`;

const IconsContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: ${colors.dark0};
`;
