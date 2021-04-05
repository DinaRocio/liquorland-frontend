import { colors } from "../ui";
import styled from "@emotion/styled";

export default function Counter({ count, setCount }) {
  const handleUp = () => {
    setCount(count + 1);
  };

  const handleDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <StyledDiv>
      <StyledButton onClick={handleDown}>-</StyledButton>
      <p>{count}</p>
      <StyledButtonGreen onClick={handleUp}>+</StyledButtonGreen>
    </StyledDiv>
  );
}

const StyledButton = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  background-color: ${colors.white2};
  border-radius: 10px;
  border: 1.5px solid ${colors.white2};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #b3b3b3;
`;

const StyledButtonGreen = styled(StyledButton)`
  color: ${colors.light2};
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  
`;
