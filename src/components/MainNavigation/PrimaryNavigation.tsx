// Routing
import { NavLink, useLocation } from 'react-router-dom';

// CSS
import classes from './PrimaryNavigation.module.css';

// Assets
import logo from '../../assets/logo.svg';

function PrimaryNavigation() {
    const location = useLocation();

    return (
        <header>
            <nav className={classes['main-nav']}>
                <ul>
                    <div className="logo-container">
                        <NavLink to="/" className={classes['header-logo']}>
                            <img src={logo} alt="logo" />
                            <p>SportSee</p>
                        </NavLink>
                    </div>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="#"
                        style={{
                            textDecoration: location.pathname.match(/user\/\d/)
                                ? 'underline'
                                : 'none',
                            pointerEvents: 'none',
                        }}
                    >
                        Profil
                    </NavLink>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}

export default PrimaryNavigation;
