import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled';
import { colors } from "../ui";
import Icon from "../UI/Icon";
import dina  from "../assets/dina.svg";
import frank from "../assets/frank.svg";
import diana from "../assets/diana.svg";

export default function Footer(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
        })

    return(
        <>
            {isDesktopOrLaptop && 
                <StyledFooter>
                    <div>
                      <img src={dina}/>
                      <p>Dina Villanueva</p>
                      <div className="icon">
                       <a href="https://www.linkedin.com/in/dinavillanueva/" target="_blank"><Icon type="likendin" size={30} fill="black"/></a>
                       <a href="https://github.com/DinaRocio" target="_blank"><Icon type="github" size={30} fill="black"/></a>
                       <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><Icon type="arroba" size={30} fill="black"/></a>
                      </div>
                    </div>

                    <div>
                      <img src={frank}/>
                      <p>Frank Dominguez</p>
                      <div className="icon">
                       <a href="https://www.linkedin.com/in/elvisfrank-dominguez/" target="_blank"><Icon type="likendin" size={30} fill="black"/></a>
                       <a href="https://github.com/kenqefh" target="_blank"><Icon type="github" size={30} fill="black"/></a>
                       <a href="" target="_blank"><Icon type="arroba" size={30} fill="black"/></a>
                      </div>
                    </div>

                    <div>
                      <img src={diana}/>
                      <p>Diana Llerena</p>
                      <div className="icon">
                       <a href="https://www.linkedin.com/in/dianaceciliallc/" target="_blank"><Icon type="likendin" size={30} fill="black"/></a>
                       <a href="https://github.com/dianaceciliallc" target="_blank"><Icon type="github" size={30} fill="black"/></a>
                       <a href="" target="_blank"><Icon type="arroba" size={30} fill="black"/></a>
                      </div>
                    </div>
                </StyledFooter>
            }
        </>
    );
}

const StyledFooter = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:140px;
    width:100%;
    & div {
      display:flex;
      flex-direction:column;
      & img {
          width:150px;
          height:150px;
      }
      & p {
          margin-top:2px;
          text-align:center;
      }
      & > .icon {
        display:flex;
        gap:2px;
        margin-top:2px;
        flex-direction:row;
        justify-content:center;
        text-decoration:none;
      }
      & svg::hover {
        color:blue;
      }
    }
`;