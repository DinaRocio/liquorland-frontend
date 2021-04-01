import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../ui";
import Icon from "../UI/Icon";

function Card({ children, src, cart }) {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <StyledContainer>
      <StyledCard>
        {<img src={src} /> && (
          <StyledInf>
            {children}
            <Button onClick={toggler}>
              {toggle ? (
                <Icon type="check" fill="white" size={20} />
              ) : (
                <Icon type="add" fill="white" size={20} />
              )}
            </Button>
          </StyledInf>
        )}
      </StyledCard>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

const StyledCard = styled.div`
  display: flex;
  width: 160px;
  padding: 15px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  justify-content: center;
  border-radius: 15px;
`;
const StyledInf = styled.div`
  display: flex;
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
    color: ${colors.dark0}
  }
  & p {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    color: ${colors.dark0}
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
function Price({ children }) {
  return <StyledPrice>{children}</StyledPrice>;
}

export { Card, Price };
