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
import useFetch from '../helpers/useFetch';
import handleFetch from '../helpers/handleFetch';

// Interfaces
// import {NutritionInformationContainerProps} from '../components/NutritionInformationContainer/NutritionInformation'

function Profile() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // Todo : group userData, userKeyData, userScore and userScoreValue
    const [userData, setUserData] = useState('');
    const [userKeyData, setUserKeyData] = useState<unknown | null>('');
    const [userScore, setUserScore] = useState<unknown | null>('');
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
                setUserData(user.data.userInfos.firstName);
                setUserScore(userInfoFactory(user).getScore(user.data));
                setUserScoreValue(
                    userInfoFactory(user).getScore(user.data)[0].score
                );
                // userInfoFactory(user).formatCalories(user.data.keyData.calorieCount)
                setUserKeyData(
                    userInfoFactory(user).formatCalories(user.data.keyData)
                );
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
    // ! New version (working)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            try {
                const retrievedData = await handleFetch(path, errorMessage, id);
                setActivityData(retrievedData.data.sessions);
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
    // ! Old version (working)
    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchData = async (path: string, errorMessage: string) => {
    //         try {
    //             const activityData: any = await genericFetch(path);
    //             // Format date
    //             userActivityFactory(activityData).getSession(
    //                 activityData.data.sessions
    //             );
    //             setActivityData(activityData.data.sessions);
    //         } catch (error) {
    //             console.log(error, errorMessage);
    //             setError(errorMessage);
    //         }
    //     };
    //     fetchData(
    //         endpoint.activityEndpoint(id),
    //         "IMPOSSIBLE DE RÉCUPÉRER VOS DONNÉES D'ACTIVITÉ"
    //     );
    // }, []);

    // API call (user average session)
    // ! New version 1 (test. Not working)
    // const retrievedData = useFetch(endpoint.averageSessionEndpoint(id))
    // console.log(retrievedData);
    // ! New version 2 (test. Working)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await handleFetch(path, errorMessage, id);
            setSessionLengthData(retrievedData);
        };
        fetchData(
            endpoint.averageSessionEndpoint(id),
            'IMPOSSIBLE DE RÉCUPÉRER LA DURÉE DES SESSIONS'
        );
    }, []);
    // ! Old version (Working)
    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchData = async (path: string, errorMessage: string) => {
    //         try {
    //             const activityData: any = await genericFetch(path);
    //             setSessionLengthData(
    //                 userAverageSessionsFactory(activityData).formatSessionDays(
    //                     activityData.data.sessions
    //                 )
    //             );
    //         } catch (error) {
    //             console.log(error, errorMessage);
    //             setError(errorMessage);
    //         }
    //     };
    //     fetchData(
    //         endpoint.averageSessionEndpoint(id),
    //         'IMPOSSIBLE DE RÉCUPÉRER LA DURÉE DES SESSIONS'
    //     );
    // }, []);

    // API call (user performance)
    // ! New version (working)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            try {
                const retrievedData = await handleFetch(path, errorMessage, id);
                setPerformanceData(retrievedData.data.data);
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
    // ! Old version (Working)
    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchData = async (path: string, errorMessage: string) => {
    //         try {
    //             const performanceData: any = await genericFetch(path);
    //             userPerformanceFactory(performanceData).translateSkills(
    //                 performanceData.data.kind
    //             );
    //             userPerformanceFactory(performanceData).formatData(
    //                 performanceData.data
    //             );
    //             setPerformanceData(performanceData.data.data);
    //         } catch (error) {
    //             console.log(error, errorMessage);
    //             setError(errorMessage);
    //         }
    //     };
    //     fetchData(
    //         endpoint.performanceEndpoint(id),
    //         'IMPOSSIBLE DE RÉCUPÉRER LES PERFORMANCES'
    //     );
    // }, []);

    return (
        <div className={classes['profile-content']}>
            {error && <p> {error} </p>}
            <WelcomingInfo firstName={userData} loading={isLoading} />
            <div className={classes.stat}>
                <GraphContainer
                    GraphElement={
                        <ActivityGraph
                            graphData={activityData}
                            loading={isLoading}
                        />
                    }
                    cssClasses={'activity-graph'}
                />
                <GraphContainer
                    GraphElement={
                        <SessionLengthGraph graphData={sessionLengthData} />
                    }
                    cssClasses={'session-length-graph'}
                />
                <GraphContainer
                    GraphElement={<SkillsGraph graphData={performanceData} />}
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
                <NutritionInformationContainer nutritionData={userKeyData} />
            </div>
        </div>
    );
}

export default Profile;
