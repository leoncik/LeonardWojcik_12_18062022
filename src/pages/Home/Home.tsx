// Routing
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-content">
            <p>Bienvenue sur SportSee !</p>
            <p>Veuillez sélectionner un utilisateur :</p>
            <ul>
                <li>
                    <Link to="/user/1">Utilisateur 1</Link>
                </li>
                <li>
                    <Link to="/user/2">Utilisateur 2</Link>
                </li>
                <li>
                    <Link to="/user/3">Utilisateur 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
