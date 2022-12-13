import { useEffect,useState } from 'react';
import './App.css';
import RechercheCategorie from './components/RechercheCategorie';

function App() {
  const [data, setData] = useState(undefined)

  const [categorie, setCategorie] = useState("")

  useEffect(() => {
      async function fetchData() {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          const responseJson = await (response.json());
          //console.log(responseJson)
          setData(responseJson)
      }
      fetchData();

  }, []);
  const selector = data?.categories.map((data, i) => <option key={i} onClick={() => setCategorie(data?.strCategory)} value={i}>{data?.strCategory}</option>)
  //const selector = ["categorie","ingredient","par nom"].map((data, i) => <option key={i} onClick={() => setCategorie(data?.strCategory)} value={i}>{data}</option>)

  return (
    <div className="App">
      <div>
                <h2>Accueil</h2>
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option>Selectionnez la catégorie de votre recette :</option>
                    {selector}
                </select>
                </div>
      {categorie && <RechercheCategorie></RechercheCategorie>}
    </div>
  );
}

export default App;
