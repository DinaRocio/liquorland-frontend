import { useDispatch, useSelector } from "react-redux";
import { fetchBestSelling } from "../features/categories/categoriesSlice";
import { useEffect } from "react";
import TopTemplate from "../templates/TopTemplate";

export default function BestSelling() {
  const dispatch = useDispatch();
  const bestSelling = useSelector((state) => state.categories.bestSellingItems);
  const status = useSelector(
    (state) => state.categories.statusSpecialCategory.bestSelling
  );

  useEffect(() => {
    dispatch(fetchBestSelling());
  }, []);
  return <TopTemplate topData={bestSelling} state={status} />;
}
