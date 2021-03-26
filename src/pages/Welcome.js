import bar from "../assets/bar.jpg";
import { colors } from "../ui";
import styled from "@emotion/styled";

export default function Welcome() {
  return (
    <WelcomeContainer>
      <img src={bar} alt="welcome" />
      <div>
      <Titles>
        <h2>Welcome to Liquorland</h2>
        <p>Get your drinks in as fast as half an hour</p>
      </Titles>
      </div>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  & > img {
    width:100%;
    height: 100%;
    object-fit: cover;
  }
 
`;
const Titles = styled.div`
  position: absolute;
  bottom: 190px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap:19px;
  & > h2 {
    font-size: 48px;
    line-height: 44px;
    text-align: center;
    color: ${colors.white};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.85);
  }
  & > p {
    font-size: 16px;
    line-height: 15px;
    text-align: center;
    color: #ffffff;
  }
`;

