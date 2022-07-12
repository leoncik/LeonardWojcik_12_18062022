// Page components
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';

// CSS
import classes from './Layout.module.css';

type LayoutProps = {
    PageContent: React.ReactNode;
};

function Layout({ PageContent }: LayoutProps) {
    return (
        <div className={classes.layout}>
            <SecondaryNavigation />
            <main className={classes['page-content']}>{PageContent}</main>
        </div>
    );
}

export default Layout;
