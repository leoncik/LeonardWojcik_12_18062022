// React hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Factories
import userInfoFactory from '../factories/userInfoFactory';
import userActivityFactory from '../factories/userActivityFactory';
import userAverageSessionsFactory from '../factories/userAverageSessionsFactory';
import userPerformanceFactory from '../factories/userPerformanceFactory';

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

// Interfaces
// import {NutritionInformationContainerProps} from '../components/NutritionInformationContainer/NutritionInformation'

function Profile() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // Todo : group userData, userKeyData, userScore and userScoreValue
    const [userData, setUserData] = useState('');
    const [userKeyData, setUserKeyData] = useState('');
    const [userScore, setUserScore] = useState('');
    const [userScoreValue, setUserScoreValue] = useState(0);

    const [sessionLengthData, setSessionLengthData] = useState<unknown | null>(
        []
    );
    const [activityData, setActivityData] = useState<unknown | null>([]);
    const [performanceData, setPerformanceData] = useState<unknown | null>([]);

    // API call (user info)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            try {
                const user: any = await genericFetch(path);
                userInfoFactory(user);
                setUserData(user.data.userInfos.firstName);
                setUserScore(userInfoFactory(user).getScore(user.data));
                setUserScoreValue(
                    userInfoFactory(user).getScore(user.data)[0].score
                );
                setUserKeyData(user.data.keyData);
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
                // userActivityFactory(activityData).getSession(
                //     activityData.data.sessions
                // );
                setActivityData(activityData.data.sessions);
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
                setSessionLengthData(
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

    // API call (user performance)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            try {
                const performanceData: any = await genericFetch(path);
                setPerformanceData(performanceData.data.data);
            } catch (error) {
                console.log(error, errorMessage);
                setError(errorMessage);
            }
        };
        fetchData(
            endpoint.performanceEndpoint(id),
            'IMPOSSIBLE DE RÉCUPÉRER LES PERFORMANCES'
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
                            GraphElement={
                                <ActivityGraph graphData={activityData} />
                            }
                            cssClasses={'activity-graph'}
                        />
                        <GraphContainer
                            GraphElement={
                                <SessionLengthGraph
                                    graphData={sessionLengthData}
                                />
                            }
                            cssClasses={'session-length-graph'}
                        />
                        <GraphContainer
                            GraphElement={
                                <SkillsGraph graphData={performanceData} />
                            }
                            cssClasses={'skills-graph'}
                        />
                        <GraphContainer
                            GraphElement={
                                <ScoreGraph
                                    graphData={userScore}
                                    scoreValue={userScoreValue}
                                />
                            }
                            cssClasses={'score-graph'}
                        />
                        <NutritionInformationContainer
                            nutritionData={userKeyData}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
