export default function TriByInput({ input, setStatut }) {

    //console.log(input.meals[0].strMeal); verification de l'emplacement de la donnée
    const recipe = input?.meals[0];
    
    const addFavoris=(e)=>(localStorage.setItem("stockage", JSON.stringify(input)));
   
    
    /*const newRecipe = [...recipe]; //non fctionnel car recipe non iterable !!voir console
    console.log(newRecipe);
    const ingredients = newRecipe.filter((data,i)=> recipe.includes("strIngredient"))
    console.log(ingredients); //tentative de creation de tableau pour affichage ingredient */

    let ingredients = [];
    let measures = [];

    for (let i = 1; i < 21; i++) { // récupération des ingredients dans un seul array
        if (eval(`recipe.strIngredient${i}`) !== "" || null || undefined) { ingredients.push(eval(`recipe.strIngredient${i}`)) }
    };

    for (let i = 1; i < 21; i++) { // récupération des mesures dans un seul array
        if (eval(`recipe.strMeasure${i}`) !== "" || null || undefined || `${""}` || ` `) { measures.push(eval(`recipe.strMeasure${i}`)) }
    };

    /* console.log(eval(`recipe.strIngredient${12}`)); //test de la donnée
    console.log(ingredients);
    console.log(eval(`recipe.strMeasure${15}`)); //test de la donnée
    console.log(measures); */

    const lg = ingredients.length; // choix de lg de ingredient pour corriger le probleme de filtre sur measures, avec " " !!
    let ingredientsAndMeasures = [];

    for (let i = 0; i < lg; i++) {
        ingredientsAndMeasures.push(measures[i] + " of " + ingredients[i])
        
    }

    //console.log(ingredientsAndMeasures); //test de la donnée

    const showMeasure = ingredientsAndMeasures.map((data, i) => <li key={i} className="list-group-item">{data}</li>)

    return (
        <div>
            <div className="mt-3">
                <h3 className="font-weight-bold text-danger">{recipe.strMeal}</h3>
            </div>
            <div>
                <a href={recipe.strYoutube} className="card-link">Demonstration</a>
                <a href={recipe.strSource} className="card-link">Source</a>
            </div>
            <button onClick={addFavoris}>Favoris</button>
        </div>
    )
}