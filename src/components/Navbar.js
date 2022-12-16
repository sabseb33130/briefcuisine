import './Navbar.css';

export default function Navbar({setRubrique}) {
    return (
        <div>
            <nav className="navbar">
                
            </nav>
            <h1 className='display-3 text-center sm md display-6'>RECETTES MORTELLES <img src='favicon.png' alt='logo' /></h1>
            <form className="container">
                    <div className='row '>
                    <button onClick={() => setRubrique("Accueil")} className="btn btn-outline-secondary btn-sm btn btn- me-md-2 col-1 sm-12  " type="button">Accueil</button>
                    <button onClick={() => setRubrique("Categorie")} className="btn btn-outline-secondary btn-sm btn btn- me-md-2 col-1" type="button">Catégories</button>
                    <button onClick={() => setRubrique("Favoris")} className="btn btn-outline-secondary btn-sm btn btn- me-md-2 col-1" type="button">Favoris</button>
                    <button onClick={() => setRubrique("Ingredients")} className="btn btn-outline-secondary btn-sm btn btn- me-md-2 col-1 " type="button">Ingredients</button>
                    </div> </form>
          
        </div>
    )
}
