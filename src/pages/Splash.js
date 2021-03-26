import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import beerIcon from "@iconify/icons-dashicons/beer";
import { colors } from "../ui";

export default function Splash() {
  return (
    <SplashContainer>
      <SplashTitle>
        <Icon icon={beerIcon} />
        <h2>Liquorland</h2>
      </SplashTitle>
    </SplashContainer>
  );
}

const SplashContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #348aa7 18.75%,
    #5dd39e 70.31%,
    #bce784 100%
  );
`;
const SplashTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items:center;
  margin:auto;
  & > svg {
    font-size: 110px;
    color: ${colors.white};
    z-index: 2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  & > h2 {
    font-size: 40px;
    line-height: 44px;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.85);
  }
`;
