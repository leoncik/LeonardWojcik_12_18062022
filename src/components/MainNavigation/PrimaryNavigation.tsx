import { NavLink, useLocation } from 'react-router-dom';
import classes from './PrimaryNavigation.module.css';
import logo from '../../assets/logo.svg';

function PrimaryNavigation() {
    const location = useLocation();

    return (
        <header>
            <nav className={classes['main-nav']}>
                <ul>
                    <div className="logo-container">
                        <li className={classes['header-logo']}>
                            <img src={logo} alt="logo" />
                            <p>SportSee</p>
                        </li>
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
