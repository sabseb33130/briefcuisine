

export function Favoris({ sendRecipe }) {

  try{ 
    const stockage = JSON.parse(localStorage.getItem("stockage"));
//Récupération du localStorage et traitement visuel des infos stockées
 
  const vignetteFavori = stockage.map((data, i) => (
    <div><div
      onClick={(e) => sendRecipe(data.recipe.meals[0].idMeal)}
      key={i}
      className="card m-2 w-33 col-4"
      style={{ width: 21 + "rem", cursor: "pointer" }}
    >
      <h3>{data.recipe.meals[0].strMeal}</h3>
      <img
        src={data.recipe.meals[0].strMealThumb}
        className="card-img-top"
        alt="{data.recipe.meals[0].strMeal"
      /></div>
     <button>videz les favoris</button> 
    </div>
  ));

  return (
    <div className="container justify-content-center mx-auto inline-flex row row-cols-2 ">
    {vignetteFavori}
    </div>
  );
} catch{
  return(
   <div className="text-center m-3">
        <meta http-equiv="refresh" content="5"></meta>
        <strong className="text-danger fs-2">Pas de favoris pour l'instant !!</strong>
        <p>La page va se recharger toute seule !</p>
      </div>
    );
}
}