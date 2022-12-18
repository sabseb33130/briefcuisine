import { useState, useEffect } from "react";
export default function RechercheCategorie({ sendRecipe }) {
  const [data, setData] = useState();

  const [list, setList] = useState(undefined);

  const [categorie, setCategorie] = useState("");
//Fetch de récupération des catégories de recette.
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const responseJson = await response.json();

      setData(responseJson);
    }
    fetchData();
  }, []);
// fetch de récupération des recetts par catégorie
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data?.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categorie]);
// Affichage des catégorie en vignette
  const vignetteCategorie = data?.categories.map((data, i) => (
    <div
      onClick={(e) => setCategorie(data?.strCategory)}
      key={i}
      className="card m-2 w-33 col-4"
      style={{ width: 25 + "rem", cursor: "pointer" }}
    >
      <h3>{data?.strCategory}</h3>
      <div className="card-body d-flex flex-wrap">
        <img
          src={data?.strCategoryThumb}
          className="card-img align-content-around"
          alt={data?.strCategory}
        />
        <p className="card-text">{data?.strCategoryDescription}</p>
      </div>
    </div>
  ));
//Affichage des recettes en format vignette
  const vignetteRecette = list?.map((data, i) => (
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
// mappind pour selecteur des recettes
   const selector = data?.categories.map((data, i) => (
    <option key={i} value={data.strCategory}>
      {data?.strCategory}
    </option>
  ));

  if (categorie === "Categorie") {
    setCategorie(undefined);
  }

  return (
    <div className="text-center">
      <div>
        <h2>Categories</h2>
        <h3>{categorie}</h3>
        <select
          onInput={(e) => setCategorie(e.target.value)}
          className="form-select w-auto ms-3"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option>Selectionnez la catégorie de votre recette :</option>
          {<option value="Categorie">Ensemble des catégories</option>}
          {selector}
        </select>
      </div>
      {!categorie && (
        <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
          {vignetteCategorie}
        </div>
      )}

      {categorie !== undefined && (
        <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
          {vignetteRecette}
        </div>
      )}
    </div>
  );
}
