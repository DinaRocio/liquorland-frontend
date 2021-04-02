import { BASE_URI } from "../app/config";
import { APIFetch } from "./apiFetch";

function ReviewServices() {}

ReviewServices.prototype.create = function ({ token, drinkId, data }) {
  return APIFetch(`${BASE_URI}/api/drinks/${drinkId}/reviews`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ review: data }),
  });
};

export { ReviewServices };
