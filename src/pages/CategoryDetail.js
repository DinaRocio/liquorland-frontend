import styled from "@emotion/styled";
import { Card, Price } from "../components/Card";
import { useHistory, useParams } from "react-router";
import Icon from "../UI/Icon";
import { colors } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../features/categories/categoriesSlice";
import { Link } from "react-router-dom";
export default function CategoryDetail() {
  let history = useHistory();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.item);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);
  const { category_id } = useParams();

  if (status === "idle") {
    dispatch(fetchCategory(category_id));
  }

  return (
    <TwoTemplate>
      {status === "loading" && "loading ..."}
      {status === "error" && "Something went wrong"}
      {status === "succeeded" && (
        <>
          <Heading>
            <Icon
              type="backArrow"
              fill="black"
              size={20}
              onClick={() => history.goBack()}
            />
            {category.name}
            <Icon
              type="filter"
              fill="black"
              size={20}
              onClick={() => history.push("/filters")}
            />
          </Heading>
          <Description>
            <p>{category.description}</p>
          </Description>
          <ProductsContainer>
            {category.drinks &&
              category.drinks.map((drink) => (
                <Card key={drink.id}>
                  <Link to={`/drinks/${drink.id}`} >
                    <img src={drink.image_url} />
                    <h4>{drink.name}</h4>
                    <p>{drink.presentation}</p>
                    <Price>${drink.price}</Price>
                  </Link>
                </Card>
              ))}
          </ProductsContainer>
        </>
      )}
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
  margin-top: 20px;
`;
const Description = styled.div`
  border-top: 1px solid rgba(226, 226, 226, 0.7);
  border-bottom: 1px solid rgba(226, 226, 226, 0.7);
  margin-bottom: 30px;
  margin-top: 35px;
  & > p {
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    color: ${colors.gray};
    text-align: center;
  }
`;
const ProductsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;