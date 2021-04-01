import { useMediaQuery } from 'react-responsive'
import { colors } from "../ui";
import styled from "@emotion/styled";
import Counter from "../UI/Counter";
import bebida from "../assets/bebida.svg"

function CardCart({ setUrl, name, presentation, price }){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
        })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
        })

 return(
        <>
        {isDesktopOrLaptop && 
            <ContainerCart>
                    <div>
                        <img src={bebida} />
                        <p className="name" >Trappistes Rochefort 8</p>
                        <p className="presentation">Lata 335 ml.</p>
                        <p className="precio" >$12.99</p>
                        <p className="counter"><Counter/></p>
                    </div>
            </ContainerCart>
        }

        {isTabletOrMobileDevice && 
            <StyledContainer>
                <img src={bebida}/>
                <div>
                    <Heading>Bell Pepper Red</Heading>
                    <Description>300ml,price</Description>
                </div>
                <Price>$12.90</Price>
                <StyledDiv>
                    <Counter/>
                </StyledDiv>
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
    display:flex;
    height:120px;
    border-bottom:1px solid  #E2E2E2;
    & img {
        width: 55px;
        height: 100px;
    }
`;

const Heading = styled.p`
        font-family: ABeeZee;
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