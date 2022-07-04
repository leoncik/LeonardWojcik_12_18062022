import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div style={{ marginLeft: '200px' }}>
            <p>Bienvenue sur SportSee !</p>
            <p>Veuillez sélectionner un utilisateur :</p>
            <ul>
                <li>
                    <NavLink to="/user/12">Utilisateur 12</NavLink>
                </li>
                <li>
                    <NavLink to="/user/18">Utilisateur 18</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Home;
