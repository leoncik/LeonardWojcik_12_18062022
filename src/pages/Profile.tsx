import ActivityGraphContainer from '../components/ActivityGraphContainer/ActivityGraphContainer';
import NutritionInformationContainer from '../components/NutritionInformationContainer/NutritionInformation';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes['profile-content']}>
            <WelcomingInfo />
            <div className={classes.stat}>
                <ActivityGraphContainer />
                <NutritionInformationContainer />
            </div>
        </div>
    );
}

export default Profile;
