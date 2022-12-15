import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-dark me-2" type="button">Accueil</button>
                    <button className="btn btn-dark me-2" type="button">Catégories</button>
                    <button className="btn btn-dark me-2" type="button">Favories</button>
                </form>
            </nav>
            <h1 className='display-3 text-center'>RECETTES MORTELLES <img src='favicon.png'alt='logo'/></h1>
        </div>
    )
}
