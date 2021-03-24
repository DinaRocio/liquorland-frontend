import Navbar from "../../UI/Navbar";
import styled from "@emotion/styled";

export default function Template({ children }) {
  return (
    <Container>
      <div>{children}</div>
      <Navbar />
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
