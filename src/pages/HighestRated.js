import { useDispatch, useSelector } from "react-redux";
import { fetchHighestRated } from "../features/categories/categoriesSlice";
import { useEffect } from "react";
import TopTemplate from "../templates/TopTemplate";

export default function HighestRated() {
  const dispatch = useDispatch();
  const highestRated = useSelector(
    (state) => state.categories.highestRatedItems
  );
  const status = useSelector(
    (state) => state.categories.statusSpecialCategory.highestRated
  );

  useEffect(() => {
    dispatch(fetchHighestRated());
  }, []);
  return <TopTemplate topData={highestRated} state={status} />;
}
