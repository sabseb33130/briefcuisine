import { useEffect,useState } from 'react';
import './App.css';
import RechercheCategorie from './components/RechercheCategorie';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState(undefined)

  const [rubrique, setrubrique] = useState("")

  useEffect(() => {
      async function fetchData() {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          const responseJson = await (response.json());
          //console.log(responseJson)
          setData(responseJson)
      }
      fetchData();

  }, []);
  //const selector = data?.categories.map((data, i) => <option key={i} onClick={() => setCategorie(data?.strCategory)} value={i}>{data?.strCategory}</option>)
  const selector = ["Categorie","Ingredient","Nom"].map((data, i) => <option key={i} onClick={() => setrubrique(data)} value={i}>{data}</option>)

  return (
    <div className="App">
      <Navbar/>
            <div>
                <h2>Accueil</h2>
                <select className="form-select w-25 ms-3" id="floatingSelect" aria-label="Floating label select example">
                    <option>Rechercher par :</option>
                    {selector}
                </select>
                </div>
      {rubrique === "Categorie" && <RechercheCategorie></RechercheCategorie>}
    </div>
  );
}

export default App;
