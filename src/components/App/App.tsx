// Page components
import PrimaryNavigation from '../MainNavigation/PrimaryNavigation';
import Profile from '../../pages/Profile/Profile';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Error404 from '../../pages/Error404/Error404';

// Routing
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <PrimaryNavigation />
            <Routes>
                <Route path="/" element={<Layout PageContent={<Home />} />} />
                <Route
                    path="/user/:id"
                    element={<Layout PageContent={<Profile />} />}
                />
                <Route
                    path="*"
                    element={<Layout PageContent={<Error404 />} />}
                />
            </Routes>
        </div>
    );
}

export default App;
