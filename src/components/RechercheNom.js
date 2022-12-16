import { useEffect, useState } from "react";

export default function RechercheNom() {
    const [nom, setNom] = useState();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=&{nom}");
            const responseJson = await response.json();
            setNom(responseJson);
        }
        fetchData();
    }, [nom]);

    return (
        <div class="input-group w-auto mb-3">
            <input onChange={(e) => setNom(e.target.value)} type="text" class="form-control" placeholder="Nom de la recette" aria-label="Nom de la recette" aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Validez</button>
        </div>
    )
}