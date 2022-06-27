import NutritionInformationContainer from '../components/NutritionInformationContainer/NutritionInformation';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';
import classes from './Profile.module.css';
import { MOCKED_DATA } from '../helpers/MOCKED_DATA';
import GraphContainer from '../components/Graphs/GraphContainer/GraphContainer';
import SkillsGraph from '../components/Graphs/SkillsGraph/SkillsGraph';
import ScoreGraph from '../components/Graphs/ScoreGraph/ScoreGraph';
import SessionLengthGraph from '../components/Graphs/SessionLengthGraph/SessionLengthGraph';
import ActivityGraph from '../components/Graphs/ActivityGraph/ActivityGraph';

function Profile() {
    return (
        <div className={classes['profile-content']}>
            <WelcomingInfo firstName={MOCKED_DATA[0].firstName} />
            <div className={classes.stat}>
                <GraphContainer
                    GraphElement={<ActivityGraph />}
                    cssClasses={'activity-graph'}
                />
                <GraphContainer
                    GraphElement={<SessionLengthGraph />}
                    cssClasses={'session-length-graph'}
                />
                <GraphContainer
                    GraphElement={<SkillsGraph />}
                    cssClasses={'skills-graph'}
                />
                <GraphContainer
                    GraphElement={<ScoreGraph />}
                    cssClasses={'score-graph'}
                />
                <NutritionInformationContainer />
            </div>
        </div>
    );
}

export default Profile;
