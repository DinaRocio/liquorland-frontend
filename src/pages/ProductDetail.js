import styled from "@emotion/styled";
import { colors, screenMediaQueries, screenSizes } from "../ui";
import Button from "../UI/Button";
import { FaChevronLeft, FaMinus, FaPlus } from "react-icons/fa";
import { BsHeartFill, BsHeart } from "react-icons/bs";

export default function ProductDetail() {
  return (
    <TemplateOne>
      <ContainerStyled>
        <NavToStyled>
          <FaChevronLeft className="icon-button" />
        </NavToStyled>
        <Image src="https://www.chicagotribune.com/resizer/BIvQ3G9tzipdSyEA6eudrC5poGA=/415x233/top/www.trbimg.com/img-5c8fff83/turbine/ct-1552940928-jrrojmfcdk-snap-image" />
        <HeadStyled>
          <TitleStyled>Natural red Apple</TitleStyled>
          {false ? <BsHeartFill color="red" /> : <BsHeart />}
          <SubTitleGrayStyled>150 ml.</SubTitleGrayStyled>
        </HeadStyled>
        <AmountContainer>
          <div className="change-quantity">
            <FaMinus className="icon-button" />
            <input value="1" onChange={() => {}} />
            <FaPlus className="icon-button" />
          </div>
          <TextM>$20.00</TextM>
        </AmountContainer>
        <div>
          <ProductDetailStyled>
            <SubTitleStyled>Product Detail</SubTitleStyled>
            <p>
              Priduct Detail Eiusmod enim cupidatat sint cillum quis ut amet
              Priduct Detail Eiusmod enim cupidatat sint cillum quis ut amet
              ullamco
            </p>
          </ProductDetailStyled>
          <ProductDetailStyled>
            <SubTitleStyled>Alcohol Grades</SubTitleStyled>
            <p>35%</p>
          </ProductDetailStyled>
          <ProductDetailStyled>
            <SubTitleStyled>Review</SubTitleStyled>
            <p>
              Priduct Detail Eiusmod enim cupidatat sint cillum quis ut amet
              Priduct Detail Eiusmod enim cupidatat sint cillum quis ut amet
              ullamco
            </p>
          </ProductDetailStyled>
        </div>
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
    width: 90%;
  }
  ${screenMediaQueries.lg} {
    width: 100%;
  }
  ${screenMediaQueries.xl} {
    max-width: ${screenSizes.xl};
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
  * {
    width: 100%;
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

      /* identical to box height, or 100% */
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

  p {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    text-transform: capitalize;

    color: ${colors.gray};
  }
`;
