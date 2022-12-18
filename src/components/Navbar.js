import "./Navbar.css";

export default function Navbar({ setRubrique }) {
  return (
    <div>
      <nav className="navbar ">
        <form className="container-fluid justify-content-start">
          <button
            onClick={() => setRubrique("Accueil")}
            className="btn btn-dark m-1 btn-sm"
            type="button"
          >
            Accueil
          </button>
          <button
            onClick={() => setRubrique("Categorie")}
            className="btn btn-dark m-1 btn-sm"
            type="button"
          >
            Catégories
          </button>
          <button
            onClick={() => setRubrique("Favoris")}
            className="btn btn-dark m-1 btn-sm"
            type="button"
          >
            Favoris
          </button>
          <button
            onClick={() => setRubrique("Ingredients")}
            className="btn btn-dark m-1 btn-sm"
            type="button"
          >
            Ingredients
          </button>
        </form>
      </nav>
      <h1 className="display-3 text-center ">
        RECETTES MORTELLES <img src="favicon.png" alt="logo" />
      </h1>
    </div>
  );
}
