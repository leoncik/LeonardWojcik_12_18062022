import { NavLink } from 'react-router-dom';
import classes from './PrimaryNavigation.module.css';
import logo from '../../assets/logo.svg';

function PrimaryNavigation() {
    return (
        <header>
            <nav className={classes['main-nav']}>
                <ul>
                    <li className={classes['header-logo']}>
                        <img src={logo} alt="logo" />
                        <p>SportSee</p>
                    </li>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        Accueil
                    </NavLink>
                    {/* Todo: set active link for any user */}
                    <NavLink
                        to="/user/18"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'underline' : 'none',
                            pointerEvents: 'none',
                        })}
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
