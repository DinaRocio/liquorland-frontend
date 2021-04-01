import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled';
import { useState } from 'react';
import { colors } from "../ui";


export default function Card({ src , presentation , name }){
   const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
   const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })
   const [toggle, setToggle] = useState(false);
   const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
   }
return(
    <>
        {isDesktopOrLaptop && 
          <CardDesktop>
              <img src={src} />
              <p className="name">{name}</p>
              <p className="presentation">{presentation}</p>
              <button onClick={toggler}>
              {toggle ? "🛒 Agregado" :  "Agregar"}
              </button>
          </CardDesktop>
        }

        {isTabletOrMobileDevice && 
        <StyledContainer>
            <StyledCard>
                {
                    <img src={src} /> &&
                    
                    <StyledInf>
                      
                        <Button onClick={toggler}>
                            {toggle ? "✓" : "+"}
                        </Button>
                    </StyledInf>
                }
            </StyledCard>
        </StyledContainer>}
    </>
 );
}

// styles for desktop
const CardDesktop = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:350px;
    height:400px;
    border-radius:5px;
    & img {
        margin-top:-25px;
        width:250px;
        height:250px;
    }
    & > .name {
        margin-top:4px;
        font-family: ABeeZee;
        font-style: italic;
        font-weight: normal;
        font-size: 19px;
        line-height: 18px;
        text-align:justify;
    }
    & > .presentation {
        margin-right:117px;
        font-family: Abel;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
    }
    & button {
        margin-top:15px;
        border-radius:6px;
        padding:4px 8px;
        outline:none;
        border:none;
        width:135px;
        height:45px;
        background-color:#5DD39E;
        color:white;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 18px;
        cursor: pointer;
    }
`;

// styles for mobile
const StyledContainer = styled.div`
    margin-top: 10px;
    margin-bottom:10px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
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
