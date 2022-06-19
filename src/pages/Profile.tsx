import ActivityGraphContainer from '../components/ActivityGraphContainer/ActivityGraphContainer';
import NutritionInformationContainer from '../components/NutritionInformationContainer/NutritionInformation';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';
import classes from './Profile.module.css';
import { MOCKED_DATA } from '../helpers/MOCKED_DATA';

function Profile() {
    return (
        <div className={classes['profile-content']}>
            <WelcomingInfo firstName={MOCKED_DATA[0].firstName} />
            <div className={classes.stat}>
                <ActivityGraphContainer />
                <NutritionInformationContainer />
            </div>
        </div>
    );
}

export default Profile;
