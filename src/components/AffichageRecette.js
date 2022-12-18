import { useState } from "react";
import "./AffichageRecette.css";

export default function AffichageRecette({ input }) {
  const recipe = input?.meals[0];
  const [favori, setFavori] = useState(
    JSON.parse(localStorage.getItem("stockage")) || []
  );

  const addFavori = (e) => {
    const stockage = [...favori];
    const newKey = stockage.length;
    stockage.push({ no: newKey, recipe: input });
    setFavori(stockage);
    localStorage.setItem("stockage", JSON.stringify(stockage));
  };

  let ingredients = [];
  let measures = [];
  // récupération des ingredients dans un seul array
  for (let i = 1; i < 21; i++) {
    ingredients.push(eval(`recipe.strIngredient${i}`));
  }
  //tri de l'array ingredients sans "",null,undefined,NaN
  let ingredientsFiltred = ingredients.filter((x) => !!x); 
  // récupération des mesures dans un seul array
  for (let i = 1; i < 21; i++) {
    measures.push(eval(`recipe.strMeasure${i}`));
  }
  //tri de l'array measures sans "",null,undefined,NaN
  let measuresFiltred = measures.filter((x) => !!x);

  const lg = ingredientsFiltred.length;
  let ingredientsAndMeasures = [];

  for (let i = 0; i < lg; i++) {
    ingredientsAndMeasures.push(
      measuresFiltred[i] + " of " + ingredientsFiltred[i]
    );
  }

  const showMeasure = ingredientsAndMeasures.map((data, i) => (
    <li key={i} className="list-group-item">
      {data}
    </li>
  ));

  return (
    <div>
      <div className="mt-3 text-center">
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
              <button onClick={(e) => addFavori()}>Favoris</button>
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
