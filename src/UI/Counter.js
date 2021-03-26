import { useState } from 'react';
import { colors } from "../ui";
import styled from "@emotion/styled";

export default function Counter() {
    const [count, setCount] = useState(1);

    const handleUp = () => {
      setCount(count + 1)
    }
  
    const handleDown = () => {
        if(count>1){
            setCount(count - 1)
        }
      
    }

    return(
        <StyledDiv>
            <StyledButton onClick={handleDown}>-</StyledButton>
                <p>{count}</p>
            <StyledButton1 onClick={handleUp}>+</StyledButton1>
        </StyledDiv>
    );
}


const StyledButton1 = styled.div`
        display:flex;
        width: 30px;
        height: 30px;
        background-color: #F0F0F0;
        border-radius:10px;
        border: 1.5px solid #F0F0F0;
        justify-content:center;
        align-items:center;
        color:${colors.light2};
`;

const StyledButton = styled.div`
        display:flex;
        width: 30px;
        height: 30px;
        background-color: #F0F0F0;
        border-radius:10px;
        border: 1.5px solid #F0F0F0;
        justify-content:center;
        align-items:center;
        color:#B3B3B3;
`;

const StyledDiv = styled.div`
        display:flex;
        gap:10px;
        align-items:baseline;
`;