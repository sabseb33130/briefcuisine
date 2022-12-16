import { useEffect, useState } from "react";
import "./App.css";
import { Favoris } from "./components/Favoris";
import RechercheCategorie from "./components/RechercheCategorie";
import RechercheIngredient from "./components/RechercheIngredient";
import RechercheNom from "./components/RechercheNom";
import Navbar from "./components/Navbar";
import { Accueil } from "./components/Accueil";
import { Footer } from "./components/Footer";



function App() {
  const [data, setData] = useState(undefined);

  const [input, setInput] = useState("");

  const [categorie, setCategorie] = useState("");

  const [rubrique, setRubrique] = useState("Accueil");



  async function sendRecipe(idRecipe) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`);
    const responseJson = await (response.json());
    setInput(responseJson)
    setCategorie("Recette") //ne pas toucher utile pour essai
  }
  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (rubrique) {
      case "Categorie":
        <RechercheCategorie />;

        break;
      case "Ingredient":
        <RechercheIngredient />;

        break;
      case "Nom":
        <RechercheNom />;
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
  const selector = ["Categorie", "Ingredients", "Nom"].map((data, i) => (
    <option key={i} value={data}>
      {data}
    </option>
  ));

  return (
    <div className="position-relative App">
      <Navbar setRubrique={setRubrique} />


      <div>
        <select
          onClick={(e) => setRubrique(e.target.value)}
          className="form-select w-auto ms-3"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option value={"Accueil"}>Rechercher par :</option>
          {selector}
        </select>
      </div>



      {rubrique === "Accueil" && <Accueil />}

      {rubrique === "Favoris" && <Favoris sendRecipe={sendRecipe}/>}

      {rubrique === "Categorie" &&
        <RechercheCategorie setRubrique={setRubrique} setCategorie={setCategorie} categorie={categorie} input={input} sendRecipe={sendRecipe} />
      }
      {rubrique === "Ingredients" &&
        <RechercheIngredient setRubrique={setRubrique} />
      }
>>>>>>> afb5ceea2604db65ade875605ec0ce5898c077a9
    </div>
  );
}

export default App;
