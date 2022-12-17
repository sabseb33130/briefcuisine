import { useEffect, useState } from "react";
import "./AffichageRecette.css";

export default function AffichageRecette({ input }) {
  //console.log(input.meals[0].strMeal); verification de l'emplacement de la donnée

  const recipe = input?.meals[0];
  const [favori, setFavori] = useState(
    JSON.parse(localStorage.getItem("stockage")) || []
  );

  const addFavori = (e) => {
    const stockage = [...favori];
    const newKey = new Date().getTime();
    stockage.push({ no: newKey, recipe: input });
    setFavori(stockage);
    localStorage.setItem("storage", JSON.stringify(stockage));
  };

  /*const newRecipe = [...recipe]; //non fctionnel car recipe non iterable !!voir console
    console.log(newRecipe);*/

  let ingredients = [];
  let measures = [];

  for (let i = 1; i < 21; i++) {
    // récupération des ingredients dans un seul array
    ingredients.push(eval(`recipe.strIngredient${i}`));
  }
  let ingredientsFiltred = ingredients.filter((x) => !!x); //tri de l'array sans "",null,undefined,NaN

  for (let i = 1; i < 21; i++) {
    // récupération des mesures dans un seul array
    measures.push(eval(`recipe.strMeasure${i}`));
  }
  let measuresFiltred = measures.filter((x) => !!x); //tri de l'array sans "",null,undefined,NaN

  const lg = ingredientsFiltred.length;
  let ingredientsAndMeasures = [];

  for (let i = 0; i < lg; i++) {
    ingredientsAndMeasures.push(
      measuresFiltred[i] + " of " + ingredientsFiltred[i]
    );
  }

  //console.log(ingredientsAndMeasures); //test de la donnée

  const showMeasure = ingredientsAndMeasures.map((data, i) => (
    <li key={i} className="list-group-item">
      {data}
    </li>
  ));

  return (
    <div>
      <div className="mt-3">
        <h2 className="font-weight-bold text-danger">{recipe.strMeal}</h2>
      </div>
      <div className="row display-noflex justify-content-md-center text-center m-5">
        <div className="col m-2">
          <img
            src={recipe.strMealThumb}
            className="col-12 rounded border"
            alt={input.strMeal}
          />
          <div className="bg-white">
            <a href={recipe.strYoutube}>Demonstration</a>
            <br />
            <a href={recipe.strSource}>Source</a>
            <div className="m-3">
              <button onClick={addFavori}>Favoris</button>
            </div>
          </div>
        </div>
        <div className="col rounded border m-2">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Measures & Ingredients</h4>
            </li>
            {showMeasure}
          </ul>
        </div>
        <div className="col rounded border w-auto m-2 bg-white">
          <h4>
            <p>Instructions</p>
          </h4>
          <p className="w-100">{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
