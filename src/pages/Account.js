import styled from "@emotion/styled";
import Template from "../templates/Template"

export default function Account() {
  return (
    <Template>
      <Heading>Account</Heading>
    </Template>
  );
}

const Heading = styled.h3`
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    text-align:center;
    margin-bottom:10px;
`;