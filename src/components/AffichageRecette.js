import "./AffichageRecette.css";

export default function AffichageRecette({ input }) {
  //console.log(input.meals[0].strMeal); verification de l'emplacement de la donnée
  const recipe = input?.meals[0];

  const addFavoris = (e) =>
    localStorage.setItem("stockage", JSON.stringify(input));

  /*const newRecipe = [...recipe]; //non fctionnel car recipe non iterable !!voir console
    console.log(newRecipe);*/

  let ingredients = [];
  let measures = [];

  console.log(recipe);

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

  /* console.log(eval(`recipe.strIngredient${12}`)); //test de la donnée
    console.log(ingredientsFiltred);
    console.log(eval(`recipe.strMeasure${15}`)); //test de la donnée
    console.log(measuresFiltred); */

  const lg = ingredientsFiltred.length; // choix de lg de ingredient pour corriger le probleme de filtre sur measures, avec " " !!
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
              <button onClick={addFavoris}>Favoris</button>
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
