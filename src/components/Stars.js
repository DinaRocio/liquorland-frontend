import styled from "@emotion/styled";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { colors } from "../ui";

export const Stars = ({ rating }) => {
  const stars = function () {
    let num = 0;
    const starsArr = [];
    while (num++ < 5) {
      if (rating >= num) {
        starsArr.push(<BsStarFill key={num} />);
      } else if (rating >= num - 0.5) {
        starsArr.push(<BsStarHalf key={num} />);
      } else {
        starsArr.push(<BsStar key={num} />);
      }
    }
    return starsArr;
  };

  return <StarsIcons>{stars()}</StarsIcons>;
};

const StarsIcons = styled.div`
  font-size: 14px;
  display: flex;
  gap: 4px;
  color: ${colors.orange};
`;
