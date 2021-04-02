import styled from "@emotion/styled";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchDrink } from "../features/drinks/drinksSlice";
import {
  fetchCreateReview,
  resetReviewStatus,
} from "../features/review/reviewSlice";
import { colors } from "../ui";
import { Stars } from "./Stars";

export const ReviewFrom = () => {
  const [formData, setFormData] = useState({ rating: 3, comment: "" });
  const token = useSelector((state) => state.session.token);
  const reviewStatus = useSelector((state) => state.review.status);
  const dispatch = useDispatch();
  const { drink_id: drinkId } = useParams();

  useLayoutEffect(() => {
    if (reviewStatus === "SUCCESS") {
      dispatch(fetchDrink(drinkId));
      dispatch(resetReviewStatus());
    }
  }, [reviewStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCreateReview({ token, drinkId, data: formData }));
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <StarsContainer>
        <Stars rating={formData.rating} />
        <FakerButtons>
          <div onClick={() => setFormData((old) => ({ ...old, rating: 1 }))} />
          <div onClick={() => setFormData((old) => ({ ...old, rating: 2 }))} />
          <div onClick={() => setFormData((old) => ({ ...old, rating: 3 }))} />
          <div onClick={() => setFormData((old) => ({ ...old, rating: 4 }))} />
          <div onClick={() => setFormData((old) => ({ ...old, rating: 5 }))} />
        </FakerButtons>
      </StarsContainer>
      <textarea
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      />
      <input type="submit" value="Send" />
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: grid;
  gap: 6px;

  textarea {
    height: 60px;
    border-radius: 8px;
    border: 1px solid ${colors.gray2};
    outline: none;

    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.4px;
    color: ${colors.gray};
    padding: 2px 8px;

    &:focus {
      border: 1px solid ${colors.gray3};
    }
  }
  input {
    justify-self: right;
    padding: 8px 20px;
  }
`;

const StarsContainer = styled.div`
  position: relative;
  width: 88px;
`;

const FakerButtons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;

  div {
    cursor: pointer;
  }
`;
