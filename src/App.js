import { useEffect, useState } from "react";
import "./App.css";
import { Favoris } from "./components/Favoris";
import RechercheCategorie from "./components/RechercheCategorie";
import RechercheIngredient from "./components/RechercheIngredient";
import Navbar from "./components/Navbar";
import { Accueil } from "./components/Accueil";
import AffichageRecette from "./components/AffichageRecette";
import RechercheNom from "./components/RechercheNom";

function App() {
  const [input, setInput] = useState("");

  const [rubrique, setRubrique] = useState("Accueil");

  async function sendRecipe(idRecipe) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
    );
    const responseJson = await response.json();
    setInput(responseJson);
    setRubrique("Recette");
  }
  useEffect(() => {
    switch (rubrique) {
      case "Categorie":
        <RechercheCategorie />;

        break;
      case "Ingredient":
        <RechercheIngredient />;

        break;
      case "Nom":
        <RechercheNom />;

        break;
    }
  }, [rubrique]);
  const selector = ["Categorie", "Favoris", "Nom"].map((data, i) => (
    <option key={i} value={data}>
      {data}
    </option>
  ));

  return (
    <div className="App">
      <Navbar setRubrique={setRubrique} />

      <div>
        <select
          onClick={(e) => setRubrique(e.target.value)}
          className="form-select w-auto ms-3 "
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option value={"Accueil"}>Rechercher par :</option>
          {selector}
        </select>
      </div>

      {rubrique === "Accueil" && <Accueil />}

      {rubrique === "Favoris" && <Favoris sendRecipe={sendRecipe} />}

      {rubrique === "Categorie" && (
        <RechercheCategorie input={input} sendRecipe={sendRecipe} />
      )}
      {rubrique === "Ingredients" && <RechercheIngredient />}
      {rubrique === "Nom" && <RechercheNom sendRecipe={sendRecipe} />}
      {rubrique === "Recette" && (
        <AffichageRecette input={input}></AffichageRecette>
      )}
    </div>
  );
}
export default App;
