import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";
import { colors } from "../ui";

function CardCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  if (status === "idle") {
    dispatch(fetchCategories());
  }

  return (
    <StyledCategory>
      {categories.map((category) => (
        <StyledCard color={category.color}>
          {/* <img drinkUrl={category.} /> */}
          <p key={category.id}>{category.name}</p>
        </StyledCard>
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
    & img {
      margin-left: 19px;
      margin-top: 19px;
    }
    & p {
      font-family: ABeeZee;
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
