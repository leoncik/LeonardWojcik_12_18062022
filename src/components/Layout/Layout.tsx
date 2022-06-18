import Profile from '../../pages/Profile';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';
import classes from './Layout.module.css';

function Layout() {
    return (
        <div className={classes.layout}>
            <SecondaryNavigation />
            <Profile />
        </div>
    );
}

export default Layout;
