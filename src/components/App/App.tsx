import './App.css';
import PrimaryNavigation from '../MainNavigation/PrimaryNavigation';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Profile from '../../pages/Profile/Profile';
import Home from '../../pages/Home/Home';

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
            </Routes>
        </div>
    );
}

export default App;
