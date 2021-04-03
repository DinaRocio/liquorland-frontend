import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";
import { colors } from "../ui";
import { Link } from "react-router-dom";

export default function CategorySlider() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const statusIndex = useSelector((state) => state.categories.statusIndex);

  if (statusIndex === "idle") {
    dispatch(fetchCategories());
  }
  return (
    <>
      <Headers>
        <p>Categories</p>
        <Link to="/explore">See all</Link>
      </Headers>
      <Container>
        {categories &&
          categories.map((category) => (
            <CategoryCard color={category.color} key={category.id}>
              <img src={category.cover_url} alt="category_pic" />
              <p>{category.name}</p>
            </CategoryCard>
          ))}
      </Container>
    </>
  );
}

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Abel;
  font-size: 24px;
  line-height: 31px;
  color: ${colors.dark0};
  margin-bottom: 18px;
  & > a {
    font-family: Abel;
    font-size: 16px;
    line-height: 20px;
    color: #53b175;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 30px;
`;
const CategoryCard = styled.div(
  ({ color, cssProp }) => css`
    width: 248.19px;
    height: 140px;
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 15px;
    border-radius: 18px;
    flex-shrink: 0;
    background-color: #${color};
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;

    color: #3e423f;
    & > img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    ${cssProp}
  `
);
