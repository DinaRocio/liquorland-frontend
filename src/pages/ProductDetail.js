import styled from "@emotion/styled";
import { colors, screenMediaQueries, screenSizes } from "../ui";
import Button from "../UI/Button";
import {
  FaChevronLeft,
  FaChevronDown,
  FaChevronUp,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { fetchDrink } from "../features/drinks/drinksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Icon from "../UI/Icon";

export default function ProductDetail() {
  const drink = useSelector((state) => state.drinks.drink);
  const show_drink_state = useSelector((state) => state.drinks.status.show);
  const { drink_id } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();

  /** Loading Drink */
  useEffect(() => {
    if (!show_drink_state) dispatch(fetchDrink(drink_id));
  }, []);

  return (
    <TemplateOne>
      <ContainerStyled>
        {show_drink_state === "LOADING" && "cargando..."}
        {show_drink_state === "ERROR" && "Something went wrong"}
        {show_drink_state === "SUCCESS" && (
          <>
            <NavToStyled>
              <Icon
                type="backArrow"
                fill="black"
                size={20}
                onClick={() => history.goBack()}
              />
            </NavToStyled>
            <Image src="https://www.chicagotribune.com/resizer/BIvQ3G9tzipdSyEA6eudrC5poGA=/415x233/top/www.trbimg.com/img-5c8fff83/turbine/ct-1552940928-jrrojmfcdk-snap-image" />
            <HeadStyled>
              <TitleStyled>{drink.name}</TitleStyled>
              {false ? (
                <BsHeartFill color="red" className="icon-button" />
              ) : (
                <BsHeart color="red" className="icon-button" />
              )}
              <SubTitleGrayStyled>{drink.presentation}</SubTitleGrayStyled>
            </HeadStyled>
            <AmountContainer>
              <div className="change-quantity">
                <FaMinus className="icon-button" />
                <input value="1" onChange={() => {}} />
                <FaPlus className="icon-button" />
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
                <SubTitleStyled>Review</SubTitleStyled>
                <IconsContainerStyled>
                  <StarsIcons>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                  </StarsIcons>
                  {true ? <FaChevronDown /> : <FaChevronUp />}
                </IconsContainerStyled>
              </ProductDetailStyled>
            </div>
          </>
        )}
      </ContainerStyled>
      <FooterStyled>
        <Button>Add to Basquet</Button>
      </FooterStyled>
    </TemplateOne>
  );
}

const TemplateOne = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  height: 100vh;
  width: 100%;

  display: grid;
  top: 0;
  grid-template-rows: calc(100% - 75px) 75px;

  ${screenMediaQueries.sm} {
    width: 95%;
  }
  ${screenMediaQueries.md} {
    width: 85%;
  }
  ${screenMediaQueries.lg} {
    width: 70%;
  }
  ${screenMediaQueries.xl} {
    max-width: ${screenSizes.lg};
  }
`;

const ContainerStyled = styled.div`
  height: 100%;
  overflow-y: scroll;
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

const TitleStyled = styled.h2`
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: ${colors.dark0};
`;

const SubTitleStyled = styled.h4`
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.dark0};
`;

const SubTitleGrayStyled = styled(SubTitleStyled)`
  color: ${colors.gray};
`;

const TextM = styled.p`
  font-family: ABeeZee;
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;

  letter-spacing: 0.1px;
  color: ${colors.dark0};
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
    font-family: ABeeZee;
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

const StarsIcons = styled.div`
  display: flex;
  gap: 4px;
  color: ${colors.orange};
`;
