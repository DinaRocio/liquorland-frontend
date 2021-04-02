import styled from "@emotion/styled";
import Template from "../templates/Template";
import Search from "../components/Search";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import girls from ".././assets/girls.jpg";
import SpecialSection from "../components/SpecialSection";
import CategorySlider from "../components/CategorySlider";
import {
  fetchBestSelling,
  fetchHighestRated,
  fetchTopRecent,
} from "../features/categories/categoriesSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const bestSelling = useSelector((state) => state.categories.bestSellingItems);
  const topRecent = useSelector((state) => state.categories.topRecentItems);
  const highestRated = useSelector(
    (state) => state.categories.highestRatedItems
  );
  const statusSpecialCategory = useSelector(
    (state) => state.categories.statusSpecialCategory
  );

  useEffect(() => {
    dispatch(fetchBestSelling());
    dispatch(fetchTopRecent());
    dispatch(fetchHighestRated());
  }, [])

  // if (bestSellingStatus === "idle") {
  //   dispatch(fetchBestSelling());
  // }

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Template>
      {statusSpecialCategory === "succeeded" && (
        <>
          <Header />
          <Search />
          <ImgB alt="upload icon" src={girls} />
          <section>
          <SpecialSection category={bestSelling} />
            <CategorySlider />
            <SpecialSection category={topRecent} />
            <SpecialSection category={highestRated} />
          </section>
        </>
      )}
    </Template>
  );
}

const ImgB = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 30px;
`;
