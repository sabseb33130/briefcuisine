import './Navbar.css';

export default function Navbar({setRubrique}) {
    return (
        <div>
            <nav className="navbar">
                <form className="container-fluid justify-content-start">
                    <button onClick={() => setRubrique("Accueil")} className="btn btn-dark me-2" type="button">Accueil</button>
                    <button onClick={() => setRubrique("Categorie")} className="btn btn-dark me-2" type="button">Catégories</button>
                    <button onClick={() => setRubrique("Favoris")} className="btn btn-dark me-2" type="button">Favoris</button>
                    <button onClick={() => setRubrique("Ingredients")} className="btn btn-dark me-2" type="button">Ingrédients</button>
                </form>
            </nav>
            <h1 className='display-3 text-center'>RECETTES MORTELLES <img src='favicon.png' alt='logo' /></h1>
        </div>
    )
}
