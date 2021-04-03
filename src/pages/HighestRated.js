import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Icon from "../UI/Icon";
import styled from "@emotion/styled";
import { colors } from "../ui";
import { fetchHighestRated} from "../features/categories/categoriesSlice";
import { useEffect } from "react";
import TopTemplate from "../templates/TopTemplate";

export default function HighestRated() {
  let history = useHistory();
  const dispatch = useDispatch();
  const highestRated = useSelector((state) => state.categories.highestRatedItems);
  const status = useSelector(
    (state) => state.categories.statusSpecialCategory.highestRated
  );

  useEffect(() => {
    dispatch(fetchHighestRated());
  }, []);
  return <TopTemplate topData={highestRated} state={status} />
}