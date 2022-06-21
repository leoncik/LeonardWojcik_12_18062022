import ActivityGraphContainer from '../components/Graphs/ActivityGraphContainer/ActivityGraphContainer';
import SessionLengthGraphContainer from '../components/Graphs/SessionLengthGraphContainer/SessionLengthGraphContainer';
import SkillsGraphContainer from '../components/Graphs/SkillsGraphContainer/SkillsGraphContainer';
import ScoreGraphContainer from '../components/Graphs/ScoreGraphContainer/ScoreGraphContainer';

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
                <SessionLengthGraphContainer />
                <SkillsGraphContainer />
                <ScoreGraphContainer />
                <NutritionInformationContainer />
            </div>
        </div>
    );
}

export default Profile;
