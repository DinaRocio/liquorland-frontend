import styled from "@emotion/styled";
import coke from "../assets/coke.png"
import Icon from "../UI/Icon";

function FavoriteCard(){
    return(
        <StyledCard>
            <img src={coke} />
            <Inf>
                <Heading>Sprite Can</Heading>
                <Presentation>325ml, Price</Presentation>
            </Inf>
            <Price>$1.50</Price>
            <div>
               <Icon type="forwardArrow" fill="black" size={18} />
            </div>
        </StyledCard>
    );
}
export default FavoriteCard;

const StyledCard = styled.div`
    display:flex;
    height:110px;
    border-bottom:1px solid #E2E2E2;;
    & img {
        width:44px;
        height:90px;
        margin:5px;
    }
    & div {
        margin-top:50px;
        margin-left:20px;
    }
`;

const Inf = styled.div`
   display:flex;
`;

const Heading = styled.p`
        font-family: ABeeZee;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        margin-top:-20px;
`;

const Presentation = styled.p`
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;
        align-items: center;
        color: #7C7C7C;
        margin-top:-3px;
        margin-left:-70px;
`;

const Price = styled.p`
        font-family: Abel;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1px;
        color: #181725;
        margin-left:79px;
        margin-top:19px;
`;