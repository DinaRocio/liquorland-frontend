import {Card, Price} from "../components/Card";
import coke from "../../src/assets/coke.png";

export default function Welcome (){
  return(
    <div>
      <p>Welcome</p>
      <Card>
        <img src={coke}/>
        <h5>Diet Coke</h5>
        <p>355ml</p>
        <Price>$1.99</Price>
      </Card>
    </div>
  )
};