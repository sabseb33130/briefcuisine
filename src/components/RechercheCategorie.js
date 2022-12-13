import { useState, useEffect } from "react";
export default function RechercheCategorie() {

    const [data, setData] = useState(undefined)

    const [categorie, setCategorie] = useState("")

    const [list, setList] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const responseJson = await (response.json());
            //console.log(responseJson)
            setData(responseJson)
        }
        fetchData();

    }, []);

    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
            .then((response) => response.json())
            .then((data) => {
                setList(data?.meals)
            })
            .catch((error) => { console.log(error) });

    }, [categorie])

    const vignetteCategorie = data?.categories.map((data, i) =>
        <div onClick={() => setCategorie(data?.strCategory) } key={i} className="card m-2 w-33 col-4" style={{ width: 25 + "rem" }}>
            <h3>{data?.strCategory}</h3>
            <div className="card-body d-flex flex-wrap">
                <p className="card-text">{data?.strCategoryDescription}</p>
                <img src={data?.strCategoryThumb} className="card-img align-content-around" alt={data?.strCategory} />
            </div>
        </div>
    )

    const vignetteRecette = list?.map((data, i) =>
        <div key={i} className="card m-2 w-33 col-4" style={{ width: 21 + "rem" }}>
            <a href={`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`}>
                <h3>{data.strMeal}</h3>
                <img src={data.strMealThumb} className="card-img-top" alt={data.strMeal} />
                <div className="card-body">
                    <p className="card-text">{data.idMeal}</p>
                </div></a>
        </div>
    )

    const selector = data?.categories.map((data, i) => <option key={i} onClick={() => setCategorie(data?.strCategory)} value={i}>{data?.strCategory}</option>)

    /*     const listRecipeClicked = list?.map((data, i) => <p key={i}>{data?.strMeal}</p>) */

    return (
        <div className="text-center">
            <div>
                <h2>Categories</h2>
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option>Selectionnez la catégorie de votre recette :</option>
                    {selector}
                </select>
                <div>
                    <label className="me-3">Filtre à 1 ingrédient</label>
                    <input type="text"></input>
                </div>
            </div>
            {!categorie && <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
                {vignetteCategorie}
            </div>}

            {categorie !== undefined && <div className="container justify-content-center mx-auto inline-flex row row-cols-2">
                {vignetteRecette}
            </div>}
        </div>
    )

}