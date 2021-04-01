import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { colors } from "../ui";
import search from "../assets/search.svg"
import dos from "../assets/dos.svg"
import tres from "../assets/tres.svg"
import cuatro from "../assets/cuatro.svg"

export default function Carussel() {
    return(
       <Div>
         <Carousel>
             <StyledDiv>
                <img src={search} />
             </StyledDiv>

             <StyledDiv>
                <img src={dos} />
             </StyledDiv>

             <StyledDiv>
                <img src={tres} />
             </StyledDiv>

             <StyledDiv>
                <img src={cuatro} />
             </StyledDiv>
         </Carousel>  
       </Div>
    )
}

const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    outline:none;
    width:100%;
    height:100%;
    margin:30px;
    & img {
        margin:20px;
        width:100%;
        height:100%;
        border-radius:15px;
    }
`;

const Div = styled.div`
    & button {
        background-color:transparent;
        border-radius:none;
        outline:none;
    }
`;