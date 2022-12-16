import { useEffect, useState } from "react";

export default function RechercheNom() {
    const [nom, setNom] = useState(undefined);
    const [data, setData] = useState(undefined);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nom}`);
            const responseJson = await response.json();
            console.log(responseJson);
            setNom();
            setData(responseJson)
        }
        fetchData();
    }, [nom]);
   console.log(data?.meals)

const nomRecette = data?.meals.map((data,i) => <option key={i} value="data">{data?.strMeal}</option>)
console.log(nomRecette);
    return (
        <div class="input-group w-auto mb-3">
            <input onChange={(e) => setNom(e.target.value)} type="text" class="form-control w-auto" placeholder="Nom de la recette" aria-label="Nom de la recette" aria-describedby="button-addon2" />
        
            <button class="btn btn-outline-light" type="button" id="button-addon2">Validez</button>
        </div>
    )
}