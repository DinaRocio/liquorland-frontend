import { colors } from "../ui";
import styled from "@emotion/styled";
import Counter from "../UI/Counter";
function CardCart({ setUrl, name, presentation, price }) {
  return (
    <StyledContainer>
      <ImageDrink src={setUrl} alt="drink" />
      <div>
        <Heading>
          <HeadingText>{name}</HeadingText>
          <span>x</span>
        </Heading>
        <Description>{presentation}</Description>
        <QuantityPriceContent>
          <StyledDiv>
            <Counter />
          </StyledDiv>
          <Price>${price}</Price>
        </QuantityPriceContent>
      </div>
    </StyledContainer>
  );
}
export default CardCart;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 700px;
  border-bottom: 1px solid #e2e2e2;
  padding: 30px 0;

  & > div {
    flex-grow: 1;
  }
`;

const ImageDrink = styled.img`
  max-width: 75px;
  min-width: 50px;
  height: 65px;
  object-fit: contain;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const Heading = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;

  span {
    cursor: pointer;
    color: ${colors.gray4};
    font-size: 14px;
    width: 20px;
    text-align: right;
  }
`;
const HeadingText = styled.p`
  font-family: ABeeZee;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.dark0};
`;

const Description = styled.p`
  font-family: Abel;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: ${colors.gray};
  margin: 5px 0 12px;
`;

const QuantityPriceContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.p`
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1px;
  color: ${colors.dark0};
`;
