import Carousel from "../components/Carousel";
import Navbar from "../UI/Navbar";
import Footer from "../components/Footer";

export default function TemplateDesktop({children}){
    return(
        <div>
            <Navbar/>
              {children}
            <Footer/>
        </div>
    );
}