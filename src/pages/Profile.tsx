// React hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Factories
import userInfoFactory from '../factories/userInfoFactory';
import userActivityFactory from '../factories/userActivityFactory';
import userAverageSessionsFactory from '../factories/userAverageSessionsFactory';

// Page components
import NutritionInformationContainer from '../components/NutritionInformationContainer/NutritionInformation';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';

// Graphs components
import GraphContainer from '../components/Graphs/GraphContainer/GraphContainer';
import SkillsGraph from '../components/Graphs/SkillsGraph/SkillsGraph';
import ScoreGraph from '../components/Graphs/ScoreGraph/ScoreGraph';
import SessionLengthGraph from '../components/Graphs/SessionLengthGraph/SessionLengthGraph';
import ActivityGraph from '../components/Graphs/ActivityGraph/ActivityGraph';

// CSS
import classes from './Profile.module.css';

// Helpers
import { genericFetch } from '../helpers/genericFetch';
import * as endpoint from '../helpers/apiEndpoints';

function Profile() {
    const { id } = useParams();
    const [userData, setUserData] = useState('');
    const [sessionLength, setSessionLength] = useState<unknown | null>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // API call (user info)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            try {
                const user: any = await genericFetch(path);
                userInfoFactory(user);
                setUserData(user.data.userInfos.firstName);
                setIsLoading(false);
                setError('');
            } catch (error) {
                console.log(error, errorMessage);
                setIsLoading(false);
                setError(errorMessage);
            }
        };
        fetchData(
            endpoint.userEndpoint(id),
            'IMPOSSIBLE DE RÉCUPÉRER VOS DONNÉES DE PROFIL'
        );
    }, []);

    // API call (user activity)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            try {
                const activityData: any = await genericFetch(path);
                userActivityFactory(activityData);
                // Format date
                userActivityFactory(activityData).getSession(
                    activityData.data.sessions
                );
            } catch (error) {
                console.log(error, errorMessage);
                setError(errorMessage);
            }
        };
        fetchData(
            endpoint.activityEndpoint(id),
            "IMPOSSIBLE DE RÉCUPÉRER VOS DONNÉES D'ACTIVITÉ"
        );
    }, []);

    // API call (user average session)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            try {
                const activityData: any = await genericFetch(path);
                userAverageSessionsFactory(activityData).formatSessionDays(
                    activityData.data.sessions
                );
                setSessionLength(
                    userAverageSessionsFactory(activityData).formatSessionDays(
                        activityData.data.sessions
                    )
                );
            } catch (error) {
                console.log(error, errorMessage);
                setError(errorMessage);
            }
        };
        fetchData(
            endpoint.averageSessionEndpoint(id),
            'IMPOSSIBLE DE RÉCUPÉRER LA DURÉE DES SESSIONS'
        );
    }, []);

    return (
        <div className={classes['profile-content']}>
            {isLoading && (
                <p className={classes['loading-message']}>Chargement…</p>
            )}
            {error && <p> {error} </p>}
            {userData && (
                <>
                    <WelcomingInfo firstName={userData} />
                    <div className={classes.stat}>
                        <GraphContainer
                            GraphElement={<ActivityGraph />}
                            cssClasses={'activity-graph'}
                        />
                        <GraphContainer
                            GraphElement={
                                <SessionLengthGraph graphData={sessionLength} />
                            }
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
                </>
            )}
        </div>
    );
}

export default Profile;
