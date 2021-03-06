import styled from "@emotion/styled";
import Navbar from "../UI/Navbar";

export default function Template({ children }) {
  return (
    <Container>
      <div className="page-content">{children}</div>
      <Navbar />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 68px;
  height: 100vh;
  width: 100%;
  padding: 35px 25px;
  .page-content {
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
