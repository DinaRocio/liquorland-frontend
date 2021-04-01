import { colors } from "../ui";
import styled from "@emotion/styled";
import Counter from "../UI/Counter";
import coke from "../assets/coke.png"

function CardCart({ setUrl, name, presentation, price }){
 return(
        <StyledContainer>
            <img src={coke}/>
            <div>
                <Heading>Bell Pepper Red</Heading>
                <Description>300ml,price</Description>
            </div>
           <Price>$12.90</Price>
           <StyledDiv>
            <Counter/>
           </StyledDiv>
        </StyledContainer>
 );
}
export default CardCart;

const StyledDiv = styled.div`
    display:flex;
    margin-top:70px;
    margin-left: -190px;
`;

const StyledContainer = styled.div`
    display:flex;
    height:120px;
    border-bottom:1px solid  #E2E2E2;
    & img {
        width: 55px;
        height: 100px;
    }
`;

const Heading = styled.p`
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        color: #181725;
        margin-left:20px;
`;

const Description = styled.p`
        font-family: Abel;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #7C7C7C;
        margin-left:20px;
`;

const Price = styled.p`
        font-family: Abel;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.1px;
        color: #181725;
        margin-left:35px;
        margin-top:72px;
`;