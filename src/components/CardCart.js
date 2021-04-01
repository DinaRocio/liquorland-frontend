import { useMediaQuery } from 'react-responsive'
import { colors } from "../ui";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateCart } from "../features/cart/cartSlice";
import Counter from "../UI/Counter";
import bebida from "../assets/bebida.svg"

function CardCart({
    id,
    setUrl,
    name,
    presentation,
    price,
    quantity,
    handleRemoveItem,
  }){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
        })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
        })

    const [count, setCount] = useState(quantity);
    const token = useSelector((state) => state.session.token);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const timer = setTimeout(() => {
        if (quantity !== count)
            dispatch(fetchUpdateCart({ token, cartId: id, quantity: count }));
        }, 1000);
        return () => clearTimeout(timer);
    }, [count]);
      
 return(
        <>
        {isDesktopOrLaptop && 
            <ContainerCart>
                    <div>
                        <img src={setUrl} />
                        <p className="name" >{name}</p>
                        <p className="presentation">{presentation}</p>
                        <p className="precio" >${price}</p>
                        <p className="counter"><Counter/></p>
                    </div>
            </ContainerCart>
        }

        {isTabletOrMobileDevice && 
            <StyledContainer>
            <ImageDrink src={setUrl} alt="drink" />
            <div>
              <Heading>
                <HeadingText>{name}</HeadingText>
                <span onClick={handleRemoveItem}>x</span>
              </Heading>
              <Description>{presentation}</Description>
              <QuantityPriceContent>
                <StyledDiv>
                  <Counter setCount={setCount} count={count} />
                </StyledDiv>
                <Price>${price}</Price>
              </QuantityPriceContent>
            </div>
          </StyledContainer>
        }
        </>
 );
}
export default CardCart;

//styles for desktop
const ContainerCart = styled.div`
    display:flex;
    width:815px;
    margin:15px;
    border-bottom:1px solid ${colors.gray};
    & div {
        display:flex;
        flex-direction:row;
        margin-left:-5px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 18px;
        color: #181725;
        & > .name {
        margin-top:55px;
        margin-left:-5px;
        }
        & > .presentation {
        margin-top:75px;
        margin-left:-210px;
        font-size: 17px;
        color: ${colors.gray};
        }
        & > .precio {
        margin-top:65px;
        margin-left:190px;
        font-size: 28px;
        }
        & > .counter {
        display:flex;
        margin-top:65px;
        margin-left:180px;
        font-size: 28px;
        }
    }
    & img {
        margin-top:15px;
        width:150px;
        height:150px;
    }
`;

//styles for mobile

const StyledDiv = styled.div`
    display:flex;
    margin-top:70px;
    margin-left: -190px;
`;

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
