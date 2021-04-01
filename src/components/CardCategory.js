import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";
import { colors } from "../ui";
import { Link } from "react-router-dom";

function CardCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const category = useSelector((state) => state.categories.item);
  const statusIndex = useSelector((state) => state.categories.statusIndex);
  const error = useSelector((state) => state.categories.error);

  if (statusIndex === "idle") {
    dispatch(fetchCategories());
  }

  return (
    <StyledCategory>
      {categories && categories.map((category) => (
        <Link to={`/categories/${category.id}`} key={category.id}>
          <StyledCard  color={category.color}>
            <img src={category.cover_url} />
            <p>{category.name}</p>
          </StyledCard>
        </Link>
      ))}
    </StyledCategory>
  );
}

export default CardCategory;

const StyledCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 140px);
  grid-gap: 15px;
  margin-top: 10px;
`;

const StyledCard = styled.div(
  ({ color, cssProp }) => css`
    width: 140px;
    height: 140px;
    border-radius: 10px;
    background-color: #${color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
      border-radius: 50%;
      width: 90px;
      height: 90px;
    }
    & p {
      color: ${colors.dark0};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-transform: capitalize;
      text-align: center;
    }
    ${cssProp}
  `
);
