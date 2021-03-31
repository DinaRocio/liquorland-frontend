import { BASE_URI } from "../app/config";
import { APIFetch } from "./apiFetch";

function CartServices() {}

CartServices.prototype.create = async function ({ token, data }) {
  return await APIFetch(`${BASE_URI}/api/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cart: data }),
  });
};

CartServices.prototype.index = async function (token) {
  return await APIFetch(`${BASE_URI}/api/carts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

CartServices.prototype.update = async function ({ token, cartId, quantity }) {
  return await APIFetch(`${BASE_URI}/api/carts/${cartId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ quantity }),
  });
};

CartServices.prototype.detele = async function ({ token, cartId }) {
  return await APIFetch(`${BASE_URI}/api/carts/${cartId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { CartServices };
