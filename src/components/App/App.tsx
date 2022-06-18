import './App.css';
import PrimaryNavigation from '../MainNavigation/PrimaryNavigation';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';
import NutritionInformationContainer from '../NutritionInformationContainer/NutritionInformation';
import Layout from '../Layout/Layout';

function App() {
    return (
        <div className="App">
            <PrimaryNavigation />
            <Layout />
        </div>
    );
}

export default App;
