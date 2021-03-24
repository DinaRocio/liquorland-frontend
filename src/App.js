import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Account from './pages/Account';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      {/* <Route path="/product-detail" component={ProductDetail} /> */}
      <Route path="/explore" component={Explore} />
      {/* <Route path="/show-category" component={ShowCategory} />
      <Route path="/filters" component={Filters} /> */}
      <Route path="/search" component={Search} />
      <Route path="/cart" component={Cart} />
      <Route path="/favorites" component={Favorites} />
      {/* <Route path="/filters" component={Filters} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/successful-order" component={SuccessfulOrder} />
      <Route path="/failed-order" component={FailedOrder} /> */}
      <Route path="/account" component={Account} />
    </Router>
  );
}

export default App;
