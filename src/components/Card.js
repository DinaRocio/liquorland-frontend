import styled from '@emotion/styled';
import { useState } from 'react';
import { colors } from "../ui";

function Card({ children, src, cart }){
   const [toggle, setToggle] = useState(false);

   const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
   }
return(
    <StyledContainer>
        <StyledCard>
            {
                <img src={src} /> &&
                
                <StyledInf>
                    {children}
                    <Button onClick={toggler}>
                        {toggle ? "✓" : "+"}
                    </Button>
                </StyledInf>
            }
        </StyledCard>
    </StyledContainer>
 );
}

const StyledContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 160px);
    grid-template-rows:repeat(autofill, 200px );
`;

const StyledCard = styled.div`
    display:flex;
    width:160px;
    height:200px;
    background: #f8f9fa;
    backdrop-filter: blur(90px);
    justify-content:center;
    border-radius: 15px;
`;
const StyledInf =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    & img {
        width: 45px;
        height: 90px;
        margin-top:-1px;
        margin-left:25px;
        margin-bottom:11px;
    }
    & p {
        font-family: Abel;
        font-style: normal;
        font-weight: normal;
        line-height: 18px;
    }
`;
const Button = styled.button`
    width: 35px;
    height: 35px;
    border-radius:10px;
    border:none;
    background-color: ${colors.light2};
    color:${colors.white} ;
    outline:none;
    cursor: pointer;
    margin-left: 72px;
    margin-top:-30px;
`;
const StyledPrice =styled.p`
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 18px;
    margin-top: 12px;
`;

function Price ( {children} ){
    return(
    <StyledPrice>{children}</StyledPrice>
    );
}

export { Card, Price };