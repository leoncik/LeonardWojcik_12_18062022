import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-content">
            <p>Bienvenue sur SportSee !</p>
            <p>Veuillez sélectionner un utilisateur :</p>
            <ul>
                <li>
                    <Link to="/user/12">Utilisateur 12</Link>
                </li>
                <li>
                    <Link to="/user/18">Utilisateur 18</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
