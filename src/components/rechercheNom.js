import { useEffect, useState } from "react";

export default function RechercheNom({ sendRecipe }) {
  const [nom, setNom] = useState("");
  const [data, setData] = useState(undefined);

  try {
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
        <div className="input m-2">
          <input
            onChange={(e) => setNom(e.target.value)}
            type="text"
            className="form-control w-auto"
            placeholder="Nom de la recette"
            aria-label="Nom de la recette"
            aria-describedby="button-addon2"
          />
        </div>
        {nom !== "" && (
          <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
            {nomRecette}
          </div>
        )}
      </div>
    );
  } catch {
    return (
      <div className="text-center m-3">
        <meta http-equiv="refresh" content="5"></meta>
        <strong>Pas de résultat pour cette recherche !!</strong>
        <p>La page va se recharger toute seule !</p>
      </div>
    );
  }
}
