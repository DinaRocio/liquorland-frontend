import Icon from "../UI/Icon";
import styled from "@emotion/styled";
import { useHistory } from "react-router";

export default function FullBlurTemplate({ children }) {
  let history = useHistory();
  return (
    <FBTemplate>
      <Header>
        {/* <img src={header} alt="header" /> */}
        <Icon
          type="backArrow"
          fill="black"
          size={20}
          onClick={() => history.goBack()}
        />
      </Header>
      <div>{children}</div>
    </FBTemplate>
  );
}
const FBTemplate = styled.div`
  padding: 25px;
  position: relative;
  & > div {
    
  }
`;
const Header = styled.div`
  /* height: 23vh; */
  display: flex;
  flex-direction: column;
  & > img {
    width: 100%;
    height: 100%;
    filter: blur(18px);
    -webkit-filter: blur(55px);
    z-index: 1;
  }
  & > svg {
    z-index: 10;
  }
`;
