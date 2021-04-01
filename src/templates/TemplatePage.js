import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function TemplatePage({children}){
    return(
        <div>
            <SearchBar/>
              {children}
            <Footer/>
        </div>
    );
}