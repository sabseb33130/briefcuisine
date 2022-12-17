export function Favoris({ sendRecipe }) {
  const stockage = JSON.parse(localStorage.getItem("stockage"));

  const vignetteFavori = stockage.map((data, i) => (
    <div
      onClick={(e) => sendRecipe(data.recipe.meals[0].idMeals)}
      key={i}
      className="card m-2 w-33 col-4"
      style={{ width: 21 + "rem", cursor: "pointer" }}
    >
      <h3>{data.recipe.meals[0].strMeal}</h3>
      <img
        src={data.recipe.meals[0].strMealThumb}
        className="card-img-top"
        alt="{data.recipe.meals[0].strMeal"
      />
    </div>
  ));

  return (
    <div className="container justify-content-center mx-auto inline-flex row row-cols-2 ">
      {vignetteFavori}
    </div>
  );
}
