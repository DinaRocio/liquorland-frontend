import { BASE_URI } from "../app/config";
import { APIFetch } from "./apiFetch";

function FavoriteServices() {}

FavoriteServices.prototype.index = async function (token) {
  return await APIFetch(`${BASE_URI}/api/favorites`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

FavoriteServices.prototype.create = async function ({ token, drink_id }) {
  return await APIFetch(`${BASE_URI}/api/favorites`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"favorite": {drink_id}}),
  });
};

FavoriteServices.prototype.delete = async function ({ token, favoriteId }) {
  const result = await APIFetch(`${BASE_URI}/api/favorites/${favoriteId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (result === true) return favoriteId;
  return result;
};

export { FavoriteServices };
