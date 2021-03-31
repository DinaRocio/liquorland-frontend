import styled from "@emotion/styled";
import {Card, Price} from "../components/Card";
import { useHistory } from "react-router";
import Icon from "../UI/Icon";
import coke from "../assets/coke.png"
export default function CategoryDetail() {
  let history = useHistory();
  return (
    <TwoTemplate>
      <Heading>
        <Icon
          type="backArrow"
          fill="black"
          size={20}
          onClick={() => history.goBack()}
        />
        Find Products
        <Icon
          type="filter"
          fill="black"
          size={20}
          onClick={() => history.push("/filters")}
        />
      </Heading>
      <ProductsContainer>
      <Card>
        <img src={coke}/>
        <h5>Diet Coke</h5>
        <p>355ml</p>
        <Price>$1.99</Price>
      </Card>
      <Card>
        <img src={coke}/>
        <h5>Diet Coke</h5>
        <p>355ml</p>
        <Price>$1.99</Price>
      </Card>
      <Card>
        <img src={coke}/>
        <h5>Diet Coke</h5>
        <p>355ml</p>
        <Price>$1.99</Price>
      </Card>
      <Card>
        <img src={coke}/>
        <h5>Diet Coke</h5>
        <p>355ml</p>
        <Price>$1.99</Price>
      </Card>
      </ProductsContainer>
    </TwoTemplate>
  );
}

const TwoTemplate = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px;
`;
const Heading = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top:20px;
`;
const ProductsContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
`
