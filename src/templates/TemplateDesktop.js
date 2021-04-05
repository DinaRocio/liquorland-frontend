import styled from '@emotion/styled';
import Navbar from "../UI/Navbar";
import Footer from "../components/Footer";

export default function TemplateDesktop({children}){
    return(
        <Container>
            <div className="navbar"><Navbar/></div>
              {children}
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-top:0;
    margin-left:220px;
    & > .navbar {
        margin-top:55px;
    }
`;
