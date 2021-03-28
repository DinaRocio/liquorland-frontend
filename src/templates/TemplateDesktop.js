import Search from "../components/Search";
import Navbar from "../UI/Navbar";

export default function TemplateDesktop({children}){
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    );
}