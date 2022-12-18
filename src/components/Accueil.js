import { useState, useEffect } from "react";
export function Accueil({sendRecipe}) {
  const [rand, setRand] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const responseJson = await response.json();
      //console.log(responseJson)

      console.log(responseJson);
      setRand(responseJson);
    }
    fetchData();
  }, []);

  const vignetteRecette = rand?.meals.map((data, i) => (
    <div onClick={(e) => sendRecipe(data.idMeal)} key={i} >
      <h2 className="text-danger fs-2"><strong >{data.strMeal}</strong></h2>

      <img src={data.strMealThumb} className="img-fluid" alt={data.strMeal} />
    </div>
  ));
  return (
    <div className="container text-center">
      <div className="row">
        <h1 className=" fs-4">
          Recettes Mortelles, 400 délicieuses idées de recettes de cuisine
          classées par catégories, par noms et par ingrédients, avec photos,
          faciles ou techniques, 100% testées et dévorées...
        </h1>
      </div>
      <div className="">{vignetteRecette}</div>
    </div>
  );
}
