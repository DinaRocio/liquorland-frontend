import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Account from "./pages/Account";
import Splash from "./pages/Splash";
import ProductDetail from "./pages/ProductDetail";
import CategoryDetail from "./pages/CategoryDetail";
import Location from "./pages/Location";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import BestSelling from "./pages/BestSelling";
import TopRecent from "./pages/TopRecent";
import HighestRated from "./pages/HighestRated";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
      <Route path="/splash" component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/drinks/:drink_id" component={ProductDetail} />
      <Route path="/location" component={Location} />
      <Route path="/explore" component={Explore} />
      <Route path="/categories/:category_id" component={CategoryDetail} />
      <Route path="/best-selling" component={BestSelling} />
      <Route path="/top-recent" component={TopRecent} />
      <Route path="/highest-rated" component={HighestRated} />
      <Route path="/search" component={Search} />
      <Route path="/cart" component={Cart} />
      <Route path="/favorites" component={Favorites} />
 
      {/* <Route path="/successful-order" component={SuccessfulOrder} />
      <Route path="/failed-order" component={FailedOrder} /> */}
      <Route path="/account" component={Account} />
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/myDetails" component={Profile} />
    </Router>
  );
}

export default App;
