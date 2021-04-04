import styled from "@emotion/styled";
import { colors } from "../ui";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  background: ${colors.light2};
  outline: none;
  border: none;
  border-radius: 10px;
  color: ${colors.white};
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 18px;
  text-align: center;
  padding: 8px 25px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: #2db2db;
    transition: width 2s, height 4s;
  }
  ${({ css }) => css}
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const FormButton = styled(StyledButton)`
  width: 95%;
  margin: 15px auto 0;
`;

export default Button;
export { FormButton };
