
import styled from "@emotion/styled";
import Navbar from "../UI/Navbar";

export default function Template({ children }) {
  return (
    <Container>
      <div>{children}</div>
      <Navbar/>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  & > div {
    overflow-y: scroll;
  }
`;
