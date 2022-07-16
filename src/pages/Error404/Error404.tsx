// Routing
import { Link } from 'react-router-dom';

// Assets
import logo from '../../assets/logo.svg';

// CSS
import classes from './Error404.module.css';

function Error404() {
    return (
        <div className={classes['error404-page-wrapper']}>
            <div className={classes['error404-page-content']}>
                <div className={classes['error404-code-container']}>
                    <p>4</p>
                    <div>
                        <img
                            src={logo}
                            alt="Logo erreur 404"
                            className={classes['error404-logo']}
                        />
                    </div>
                    <p>4</p>
                </div>

                <p>{"La page que vous demandez n'existe pas 😳"}</p>
                <Link to="/">{'Retourner sur la page d’accueil'}</Link>
            </div>
        </div>
    );
}

export default Error404;
