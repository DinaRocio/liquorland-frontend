import styled from "@emotion/styled";
import Template from "../templates/Template";
import FavoriteCard from "../components/favoriteCard";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect } from "react";
import { fetchIndexFavorites } from "../features/favorites/favoriteSlice";

export default function Favorites() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const favoriteList = useSelector((state) => state.favorite.list);
  const favoriteState = useSelector((state) => state.favorite.status);

  useEffect((_) => {
    if (token) dispatch(fetchIndexFavorites(token));
  }, []);

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <Template>
      <Heading>Favorites</Heading>
      <Overlay />
      {favoriteState.index === "loading" && <span>Loading ...</span>}
      {favoriteState.index === "failed" && <span>Something was wrong</span>}
      {favoriteState.index === "success" &&
        favoriteList.map((favoriteItem) => (
        <FavoriteCard favorite={favoriteItem}/>
        ))}
    </Template>
  );
}

const Heading = styled.h3`
  font-family: ABeeZee;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

const Overlay = styled.div`
  color: #e2e2e2;
  width: 940px;
  height: 14px;
  border-bottom: 1px solid;
  margin-top: 32px;
  margin-bottom: 15px;
`;
