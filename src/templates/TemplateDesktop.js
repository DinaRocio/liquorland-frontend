import styled from '@emotion/styled';
import Navbar from "../UI/Navbar";
import Footer from "../components/Footer";

export default function TemplateDesktop({children}){
    return(
        <Container>
              <Navbar/>
              {children}
            <div className="footer">
              <Footer/>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-left:220px;
    & > .footer {
        display:flex;
        justify-content:center;
    }
`;