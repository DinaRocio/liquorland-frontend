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
import Profile from "./pages/Profile";
import BestSelling from "./pages/BestSelling";
import TopRecent from "./pages/TopRecent";
import HighestRated from "./pages/HighestRated";

import { useMediaQuery } from "react-responsive";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIndexFavorites } from "./features/favorites/favoriteSlice";

const ResponsiveContext = createContext();

function App() {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  /**
   * Responsive:
   * - mobile (tablet)
   * - desktop
   */
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });

  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });


  useEffect(() => {
    if (token) dispatch(fetchIndexFavorites(token))
  }, [token])

  return (
    <ResponsiveContext.Provider
      value={{
        isDesktopOrLaptop,
        isBigScreen,
        isTabletOrMobile,
        isTabletOrMobileDevice,
        isPortrait,
        isRetina,
      }}
    >
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
    </ResponsiveContext.Provider>
  );
}

export default App;

//<Route path="/edit-profile" component={EditProfile} />
//import EditProfile from "./pages/EditProfile";