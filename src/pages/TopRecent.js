import { useDispatch, useSelector } from "react-redux";
import { fetchTopRecent } from "../features/categories/categoriesSlice";
import { useLayoutEffect } from "react";
import TopTemplate from "../templates/TopTemplate";

export default function TopRecent() {
  const dispatch = useDispatch();
  const topRecent = useSelector((state) => state.categories.topRecentItems);
  const status = useSelector(
    (state) => state.categories.statusSpecialCategory.topRecent
  );

  useLayoutEffect(() => {
    dispatch(fetchTopRecent());
  }, []);
  return <TopTemplate topData={topRecent} state={status} />;
}
