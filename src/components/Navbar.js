import "./Navbar.css";

export default function Navbar({ setRubrique }) {
  return (
    <div>
      <nav className="navbar"></nav>

      <form className="container">
        <div className="row ">
          <button
            onClick={() => setRubrique("Accueil")} 
            className="btn btn-outline-secondary btn-sm  col-2"
            type="button"
          >
            Accueil
          </button>
          <button
            onClick={() => setRubrique("Categorie")}
            className="btn btn-outline-secondary btn-sm col-3"
            type="button"
          >
            Catégories
          </button>
          <button
            onClick={() => setRubrique("Favoris")}
            className="btn btn-outline-secondary btn-sm col-2"
            type="button"
          >
            Favoris
          </button>
          <button
            onClick={() => setRubrique("Ingredients")}
            className="btn btn-outline-secondary btn-sm btn btn- me-md-2 col-3 "
            type="button"
          >
            Ingredients
          </button>
        </div>
      </form>
      <h1 className="display-3 text-center ">
        RECETTES MORTELLES <img src="favicon.png" alt="logo" />
      </h1>
    </div>
  );
}
