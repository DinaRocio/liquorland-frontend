function DrinkServices() {}

DrinkServices.prototype.show = async function (drink) {
  const response = await fetch(
    `https://liquorland-backend.herokuapp.com/api/drinks/${drink}`,
    {
      method: "GET",
    }
  );

  const result = await response.json();
  return result;
};

export { DrinkServices };
