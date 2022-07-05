import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';
import classes from './Layout.module.css';

type LayoutProps = {
    PageContent: React.ReactNode;
};

function Layout({ PageContent }: LayoutProps) {
    return (
        <div className={classes.layout}>
            <SecondaryNavigation />
            {PageContent}
        </div>
    );
}

export default Layout;
