import { useEffect, useState } from 'react';
import './App.css';
import RechercheCategorie from './components/RechercheCategorie';

function App() {
  const [data, setData] = useState(undefined)

  const [rubrique, setRubrique] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const responseJson = await (response.json());
      setData(responseJson)
      
    }
    fetchData();
  }, []);
  //const selector = data?.categories.map((data, i) => <option key={i} onClick={() => setCategorie(data?.strCategory)} value={i}>{data?.strCategory}</option>)
  const selector = ["Categorie", "Ingredient", "Nom"].map((data, i) => <option key={i} value={data}>{data}</option>)

  return (
    <div className="App">
      {rubrique !== "Categorie" && <div>
        <h2>Accueil</h2>
        <select onClick={(e) => setRubrique(e.target.value)} className="form-select w-auto w-25 ms-3" id="floatingSelect" aria-label="Floating label select example">
          <option>Rechercher par :</option>
          {selector}
        </select>
      </div>}
      {rubrique === "Categorie" && <RechercheCategorie data={data} setRubrique={setRubrique}></RechercheCategorie>}
    </div>
  );
}

export default App;
