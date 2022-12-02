const getPriceFromApi = () => {
    return fetch('https://api.polygon.io/v2/aggs/ticker/GOOG/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=g14DIhw20yIUFfTGwdYPz0UGT8SIwODp')
      .then((response) => response.json())
      .then((json) => {
        price = json.results[0].o
        price2 = JSON.parse(price)
        console.log(price)
        console.log(price2)
        return price2;
      })
      .catch((error) => {
        console.error(error);
      });
  };


export default getPriceFromApi;