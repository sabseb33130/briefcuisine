import { useState, useEffect } from "react";
import AffichageRecette from "./AffichageRecette";  //ne pas toucher  !!! pour essais divers et variés xD
export default function RechercheCategorie({input,categorie, setCategorie,sendRecipe}) {

    const [data, setData] = useState()

    const [list, setList] = useState(undefined)

     //ne pas toucher utile pour essai

    useEffect(() => {

        async function fetchData() {
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const responseJson = await response.json();
        //console.log(responseJson)

        //console.log(responseJson);
        setData(responseJson);
    }
    fetchData();


    }, [])
    
    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
            .then((response) => response.json())
            .then((data) => {
                setList(data?.meals)
            })
            .catch((error) => { console.log(error) });

    }, [categorie])
    const vignetteCategorie = data?.categories.map((data, i) =>
        <div onClick={(e) => setCategorie(data?.strCategory)} key={i} className="card m-2 w-33 col-4" style={{ width: 25 + "rem", cursor: "pointer" }}>

            <h3>{data?.strCategory}</h3>
            <div className="card-body d-flex flex-wrap">
                <img src={data?.strCategoryThumb} className="card-img align-content-around" alt={data?.strCategory} />
                <p className="card-text">{data?.strCategoryDescription}</p>
            </div>

        </div>
    )

    

    const vignetteRecette = list?.map((data, i) =>
        <div onClick={(e) => sendRecipe(data.idMeal)} key={i} className="card m-2 w-33 col-4" style={{ width: 21 + "rem", cursor: "pointer" }}>

            <h3>{data.strMeal}</h3>
            <img src={data.strMealThumb} className="card-img-top" alt={data.strMeal} />
        </div>
    )

    const selector = data?.categories.map((data, i) => <option key={i} value={data.strCategory}>{data?.strCategory}</option>)

    if (categorie === "Categorie") { setCategorie(undefined) };


    /* function inputSubmit(e){
        e.preventDefault();
         // console.log(e.target[0].value);    !!! appelle de la valeur en target array[0], a noter je pense !!!!
        
        setInput("") // reboot du submit
    } */

    return (
        <div className="text-center">
            <div>
                <h2>Categories</h2><h3>{categorie}</h3>
                <select onInput={(e) => setCategorie(e.target.value)} className="form-select w-auto ms-3" id="floatingSelect" aria-label="Floating label select example">
                    <option>Selectionnez la catégorie de votre recette :</option>
                    {<option value="Categorie">Ensemble des catégories</option>}
                    {selector}
                </select>
                {/* <form onSubmit={inputSubmit}>
                    <label className="me-3">Filtre à 1 ingrédient</label>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
                    <input type="reset" Value="Reset" onClick={() => setInput("")}/>
                </form> */}
                
            </div>
            {!categorie && <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
                {vignetteCategorie}
            </div>}

            {(categorie !== undefined) && <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
                {vignetteRecette}</div>}

            {categorie === "Recette" && <AffichageRecette input={input}></AffichageRecette>}

        </div>
    )

}