import { useEffect, useState } from "react";
import "./App.css";
import { Favoris } from "./components/Favoris";
import RechercheCategorie from "./components/RechercheCategorie";
import RechercheIngredient from "./components/RechercheIngredient";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(undefined);

  const [rubrique, setRubrique] = useState("");

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (rubrique) {
      case "Categorie":
        <RechercheCategorie />;

        break;
      case "Ingredient":
        <RechercheIngredient />;

        break;

      /* case "Nom": async function fetchData() {
            const response = await fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
            );
            const responseJson = await response.json();
            //console.log(responseJson) 
      
            //console.log(responseJson);
            setRandom(responseJson);
          }
          fetchData();
    
            break; */
    }
  }, [rubrique]);
  const selector = ["Categorie", "Ingredient", "Nom"].map((data, i) => (
    <option key={i} value={data}>
      {data}
    </option>
  ));

  return (
    <div className="App">
      <Navbar />
      <h2>Accueil</h2>
      <Favoris />
      {rubrique !== "Categorie" && (
        <div>
          <select
            onClick={(e) => setRubrique(e.target.value)}
            className="form-select w-auto ms-3"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option>Rechercher par :</option>
            {selector}
          </select>
        </div>
      )}
      {rubrique === "Categorie" && (
        <RechercheCategorie data={data} setRubrique={setRubrique} />
      )}
      {rubrique === "Ingredient" && (
        <RechercheIngredient data={data} setRubrique={setRubrique} />
      )}
    </div>
  );
}

export default App;
