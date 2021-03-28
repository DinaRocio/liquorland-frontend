import { BASE_URI } from "../app/config";

function DrinkServices() {}

DrinkServices.prototype.show = async function (drink) {
  const response = await fetch(`${BASE_URI}/api/drinks/${drink}`, {
    method: "GET",
  });

  const result = await response.json();
  return result;
};

export { DrinkServices };
