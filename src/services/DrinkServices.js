function DrinkServices() {}

DrinkServices.prototype.show = async function () {
  const response = await fetch(
    "https://liquorland-backend.herokuapp.com/api/drinks/1",
    {
      method: "GET",
    }
  );

  const result = await response.json();
  return result;
};

export { DrinkServices };
