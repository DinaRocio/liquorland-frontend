import { colors } from "../ui";
import styled from "@emotion/styled";
import  Icon  from "../UI/Icon";
import beerIcon from "@iconify/icons-dashicons/beer";

function Header() {
    return(
        <StyledHeader>
             <p>Dhaka, Banassre</p>
        </StyledHeader>
    );
}

export default Header;

const StyledHeader = styled.div`
      display:flex;
      justify-content:center;
      & > svg {
        font-size: 45px;
        color: ${colors.dark0};
        margin-top: -5px;
        margin-left: 7px;
        z-index: 2;
      }
      & p {
          margin-top: 40px;
          margin-bottom: 7px;
          margin-left: -70px;
      }
`;