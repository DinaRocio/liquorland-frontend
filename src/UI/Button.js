import styled from '@emotion/styled';
import { colors } from "../ui";

const StyledButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 47px;
    background: ${colors.light2};
    outline:none;
    border:none;
    border-radius:10px;
    color: ${colors.white};
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 18px;
    text-align: center;
    padding: 8px 25px;
    color: #FFFFFF;
    cursor:pointer;
    &:hover {
    background: #2db2db;
    transition: width 2s, height 4s;;
  }
`;

function Button({children}){
 return(
    <StyledButton>{children}</StyledButton>
 );
}

export default Button;