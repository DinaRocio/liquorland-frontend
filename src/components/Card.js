import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled';
import { useState } from 'react';
import { colors } from "../ui";
import Icon from "../UI/Icon";


export default function Card({ src , presentation , name ,children, price }){
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
              <div className="option">
                <p className="price">${price}</p>
                <button onClick={toggler}>
                {toggle ? (
                    <Icon type="cart" fill="#5DD39E"  size={35} >-</Icon>
                ) : (
                    <Icon type="cart" fill="#7C7C7C" size={35} />
                )}
                </button>
              </div>
          </CardDesktop>
        }

        {isTabletOrMobileDevice && 
        <>
            {<img src={src} /> && (
            <StyledInf>
                {children}
                <Button onClick={toggler}>
                {toggle ? (
                    <Icon type="check" fill="white" size={20}/>
                ) : (
                    <Icon type="add" fill="white" size={20} />
                )}
                </Button>
            </StyledInf>
            )}
        </> 
        }
    
    </>
 );
}


// styles for desktop
const CardDesktop = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${colors.white};
    flex-direction:column;
    width:270px;
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
    & > .option {
      display:flex;
      margin-top:15px;
      gap:110px;
      & > .price {
        font-family: Abel;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 18px;
        color:${colors.light2};
      }
      & button {
        background-color:transparent;
        outline:none;
        border:none;
        cursor: pointer;
        color:${colors.gray};
      }
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
  display: flex;
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  justify-content: center;
  border-radius: 15px;
`;
const StyledInf = styled.div`
  display: flex;
  width: 100%;

  border: 1px solid rgba(226, 226, 226, 0.7);

  border-radius: 15px;
  flex-direction: column;
  gap: 5px;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  & img {
    width: 45px;
    height: 90px;
  }
  & h4 {
    color: ${colors.dark0};
  }
  & p {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    color: ${colors.dark0};
  }
  & a {
    text-decoration: none;
  }
`;
const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: ${colors.light2};
  color: ${colors.white};
  outline: none;
  cursor: pointer;
  margin-left: 72px;
  margin-top: -30px;
`;
const StyledPrice = styled.p`
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 18px;
  margin-top: 12px;
`;
