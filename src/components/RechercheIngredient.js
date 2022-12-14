import { useState, useEffect } from "react";
export default function RechercheIngredient() {
  const [random, setRandom] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=a"
      );
      const responseJson = await response.json();
      //console.log(responseJson)

      //console.log(responseJson);
      setRandom(responseJson);
    }
    fetchData();
  }, []);
  console.log(random);
  const selector1 = random?.meals.map((random, i) => (
    <option key={i} value={i} onClick={() => setRandom(random?.strIngredient)}>
      {random?.strIngredient}
    </option>
  ));

  const test = random?.meals.map((random, i) => (
    <div
      key={i}
      className="card m-2 w-33 col-4 w-25"
      style={{ width: 21 + "rem" }}
    >
      <h3>{random.strMeal}</h3>
      <img
        src={`https://www.themealdb.com/images/ingredients/${random?.strIngredient}.png`}
        className=""
        alt={random.strIngredient}
      />
      {random?.strIngredient} {random?.strMeal}
    </div>
  ));

  return (
    <div>
      <select className="form-select w-25 ms-3">{selector1}</select>
      <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
        {test}
      </div>
    </div>
  );
}
