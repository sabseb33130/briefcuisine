import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar">
                <form class="container-fluid justify-content-start">
                    <button class="btn btn-dark me-2" type="button">Accueil</button>
                    <button class="btn btn-dark me-2" type="button">Catégories</button>
                    <button class="btn btn-dark me-2" type="button">Favories</button>
                </form>
            </nav>
            <h1 className='display-3 text-center'>RECETTES MORTELLES <img src='favicon.png'alt='logo'/></h1>
        </div>
    )
}
