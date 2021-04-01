import styled from "@emotion/styled";
import { Card, Price } from "../components/Card";
import { useHistory, useParams } from "react-router";
import Icon from "../UI/Icon";
import { colors, screenMediaQueries } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../features/categories/categoriesSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../UI/Button";
import { fetchBrands } from "../features/brands/brandsSlice";
import { fetchStyles } from "../features/styless/stylesSlice";


export default function CategoryDetail() {
  let history = useHistory();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.item);
  const brands = useSelector((state) => state.brands.items);
  const styles = useSelector((state) => state.styles.items);
  const statusShow = useSelector((state) => state.categories.statusShow);
  const { category_id } = useParams();

  const [filterOpen, setFilterOpen] = useState(false);



  useEffect(() => {
    dispatch(fetchCategory(category_id));
    dispatch(fetchBrands());
    dispatch(fetchStyles());
  }, []);

  return (
    <TwoTemplate>
      {statusShow === "loading" && "loading ..."}
      {statusShow === "error" && "Something went wrong"}
      {statusShow === "succeeded" && (
        <>
         <FilterModal isOpen={filterOpen}>
            <Heading>
              <Icon
                type="close"
                fill="black"
                size={30}
                onClick={() => setFilterOpen(!filterOpen)}
              />
              Filters
              <div></div>
            </Heading>
            <FiltersContent>
              <FilterForm>
                <p>Brand</p>
                <FilterInput>
                  {brands && brands.map((brand) => (
                    <div className="filterOption" key={brand.id}>
                    <input type="checkbox" name={brand.name} value={brand.name}/>
                    <label for="vehicle1"> {brand.name}</label>
                  </div>
                  ))}
                </FilterInput>
                <p>Styles</p>
                <FilterInput>
                  {styles && styles.map((brand) => (
                    <div className="filterOption" key={brand.id}>
                    <input type="checkbox" name={brand.name} value={brand.name}/>
                    <label for="vehicle1"> {brand.name}</label>
                  </div>
                  ))}
                </FilterInput>
                <Button>Apply Fiters</Button>
              </FilterForm>
            </FiltersContent>
          </FilterModal>
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
              onClick={() => setFilterOpen(!filterOpen)}
            />
          </Heading>
         
          <Description>
            <p>{category.description}</p>
          </Description>
          <ProductsContainer>
            {statusShow === "succeeded" &&
              category.drinks.map((drink) => (
                <Card key={drink.id}>
                  <img src={drink.image_url} alt="drink_pic" />
                  <Link to={`/drinks/${drink.id}`}>
                    <h4>{drink.name}</h4>
                  </Link>
                  <p>{drink.presentation}</p>

                  <Price>${drink.price}</Price>
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
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  grid-gap: 15px;
  ${screenMediaQueries.xs} {
    grid-template-columns: 1fr;
  }
`;
const FilterModal = styled.div(
  ({ isOpen }) => `
  display: ${isOpen ? "flex" : "none"};
  height: 100%;
  position: absolute;
  width: 100vw;
  left: 0;
  background-color: ${colors.gray2};
  border-radius: 30px 30px 0px 0px;
  padding: 30px;
  flex-direction: column;
  gap: 31px;
  `
);

const FiltersContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray2};
  border-radius: 30px 30px 0px 0px;
  padding: 30px;
`;
const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 23px;
  & > p {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    color: ${colors.dark0};
  }
`;

const FilterInput = styled.div`
  display: flex;
  flex-direction: column;
  .filterOption {
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    gap: 11px;
  }
`;
