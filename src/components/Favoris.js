import { useState } from "react";

export function Favoris({ sendRecipe }) {
  const [noFav, setNoFav] = useState("");
  const [clear, setClear] = useState(false);

  try {
    const stockage = JSON.parse(localStorage.getItem("stockage"));
    //Récupération du localStorage et traitement visuel des infos stockées
    const vignetteFavori = stockage.map((data, i) => (
      <div className="col-sm-12 .col-md-5 .col-lg-6 mb-5">
        <div
          onClick={(e) => {
            sendRecipe(data.recipe.meals[0].idMeal);
          }}
          key={i}
          className="card mx-auto w-75 text-center align-items-center col-12"
          style={{ cursor: "pointer" }}
        >
          <h3>{data.recipe.meals[0].strMeal}</h3>
          <div className="text-center">
            <button
              className="btn btn-warning btn-sm mb-3"
              style={{
                " --bs-btn-padding-y": 0.25 + "rem",
                " --bs-btn-padding-x": 0.25 + "rem",
                "--bs-btn-font-size": 0.75 + "rem",
              }}
              onClick={(e) => setNoFav(data.no)}
            >
              Supprimer ce Favori
            </button>
          </div>
          <img
            src={data.recipe.meals[0].strMealThumb}
            className="card-img-top"
            alt="{data.recipe.meals[0].strMeal"
          />
        </div>
      </div>
    ));

    if (noFav !== "") {
      const deleteFav = (no) => {
        const copyStockage = [...stockage];

        copyStockage.splice(no, 1);

        localStorage.setItem("stockage", JSON.stringify(copyStockage));
      };
      deleteFav(noFav);
    }

    if (clear !== false) {
      function clearAll() {
        localStorage.clear();
      }
      clearAll();
    }

    return (
      <div>
        <div className="text-center">
          <button
            className="m-2 btn btn-danger"
            onClick={(e) => setClear(true)}
          >
            Supprimez vos Favoris
          </button>
        </div>
        <div className="container  ">
          {vignetteFavori}
          <div></div>
        </div>
      </div>
    );
  } catch {
    return (
      <div className="text-center m-3">
        <meta http-equiv="refresh" content="5"></meta>
        <strong className="text-danger fs-2">
          Pas de favoris pour l'instant !!
        </strong>
        <p>La page va se recharger toute seule !</p>
      </div>
    );
  }
}
