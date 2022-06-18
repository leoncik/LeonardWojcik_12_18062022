import classes from './PrimaryNavigation.module.css'
import logo from '../../assets/logo.svg'

function PrimaryNavigation() {
    return (
        <header>
            <nav className={classes['main-nav']}>
                <ul>
                    <li className={classes['header-logo']}>
                        <img src={logo} alt="logo" />
                        <p>SportSee</p>
                    </li>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>

        </header>

    )
}

export default PrimaryNavigation