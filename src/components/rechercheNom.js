import { useEffect, useState } from "react";

export default function RechercheNom(sendRecipe) {
  const [nom, setNom] = useState("");
  const [data, setData] = useState(undefined);
  let messageErreur = undefined;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${nom}`
      );
      const responseJson = await response.json();
      setData(responseJson);
    }
    fetchData();
  }, [nom]);
  console.log(nom);

  const nomRecette = data?.meals.map((data, i) => (
    <div
      onClick={(e) => sendRecipe(data.idMeal)}
      key={i}
      className="card m-2 w-33 col-4"
      style={{ width: 21 + "rem", cursor: "pointer" }}
    >
      <h3>{data.strMeal}</h3>
      <img
        src={data.strMealThumb}
        className="card-img-top"
        alt={data.strMeal}
      />
    </div>
  ));

  return (
    <div>
      <div class="input-group w-auto mb-3">
        <input
          onChange={(e) => setNom(e.target.value)}
          type="text"
          class="form-control w-auto"
          placeholder="Nom de la recette"
          aria-label="Nom de la recette"
          aria-describedby="button-addon2"
        />
      </div>
      <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
        {nomRecette}
        {messageErreur !== undefined && { messageErreur }}
      </div>
    </div>
  );
}
