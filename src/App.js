import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      {/* <Route path="/product-detail" component={ProductDetail} />
      <Route path="/categories" component={Categories} />
      <Route path="/show-category" component={ShowCategory} />
      <Route path="/filters" component={Filters} />
      <Route path="/search" component={Search} />
      <Route path="/my-cart" component={Cart} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/filters" component={Filters} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/successful-order" component={SuccessfulOrder} />
      <Route path="/failed-order" component={FailedOrder} />
      <Route path="/profile" component={MyProfile} /> */}
    </Router>
  );
}

export default App;
