// React hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Page components
import NutritionInformationContainer from '../../components/NutritionInformationContainer/NutritionInformation';
import WelcomingInfo from '../../components/WelcomingInfo/WelcomingInfo';

// Graphs components
import GraphContainer from '../../components/Graphs/GraphContainer/GraphContainer';
import SkillsGraph from '../../components/Graphs/SkillsGraph/SkillsGraph';
import ScoreGraph from '../../components/Graphs/ScoreGraph/ScoreGraph';
import SessionLengthGraph from '../../components/Graphs/SessionLengthGraph/SessionLengthGraph';
import ActivityGraph from '../../components/Graphs/ActivityGraph/ActivityGraph';

// CSS
import classes from './Profile.module.css';

// Helpers
import * as endpoint from '../../helpers/apiEndpoints';
import handleFetch from '../../helpers/handleFetch';

// Interfaces
import {
    IActivitySessions,
    IUserInfoData,
    IAverageSessions,
    IPerformanceData,
    IKeyData,
} from '../../interfaces/fetchedApiData';
// import {NutritionInformationContainerProps} from '../components/NutritionInformationContainer/NutritionInformation'

function Profile() {
    const { id } = useParams();

    // Loading states
    // const [isLoading, setIsLoading] = useState(true);
    const [isActivityLoading, setIsActivityLoading] = useState(true);
    const [isPerformanceLoading, setIsPerformanceLoading] = useState(true);
    const [isSessionLengthLoading, setIsSessionLengthLoading] = useState(true);
    const [isUserInfoLoading, setIsUserInfoLoading] = useState(true);

    // Error states
    // const [error, setError] = useState('');
    const [userInfoError, setUserInfoError] = useState('');
    const [activityError, setActivityError] = useState('');
    const [performanceError, setPerformanceError] = useState('');
    const [sessionLengthError, setSessionLengthError] = useState('');

    // Data states
    const [userData, setUserData] = useState('');
    const [userKeyData, setUserKeyData] = useState<IKeyData | undefined>();
    const [userScore, setUserScore] = useState<
        Array<IUserInfoData['score']> | undefined
    >([]);
    const [userScoreValue, setUserScoreValue] = useState(0);

    const [sessionLengthData, setSessionLengthData] = useState<
        Array<IAverageSessions> | undefined
    >([]);
    const [activityData, setActivityData] = useState<
        Array<IActivitySessions> | undefined
    >([]);
    const [performanceData, setPerformanceData] = useState<
        Array<IPerformanceData> | undefined
    >([]);

    // API call (user info)
    useEffect(() => {
        setIsUserInfoLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await handleFetch(path, id);
            if (retrievedData) {
                const { fetchedData, scoreData, nutritionData, scoreValue } =
                    retrievedData;
                setUserData(fetchedData.data.userInfos.firstName);
                setUserScore(scoreData);
                setUserScoreValue(scoreValue);
                setUserKeyData(nutritionData);
            } else {
                setUserInfoError(errorMessage);
            }
            setIsUserInfoLoading(false);
        };
        fetchData(
            endpoint.userEndpoint(id),
            'Impossible de récupérer vos données de profil.'
        );
    }, []);

    // API call (user activity)
    useEffect(() => {
        setIsActivityLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await handleFetch(path, id);
            retrievedData
                ? setActivityData(retrievedData.data.sessions)
                : setActivityError(errorMessage);
            setIsActivityLoading(false);
        };
        fetchData(
            endpoint.activityEndpoint(id),
            "Impossible de récupérer vos données d'activité."
        );
    }, []);

    // API call (user average session)
    useEffect(() => {
        setIsSessionLengthLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await handleFetch(path, id);
            retrievedData
                ? setSessionLengthData(retrievedData)
                : setSessionLengthError(errorMessage);
            setIsSessionLengthLoading(false);
        };
        fetchData(
            endpoint.averageSessionEndpoint(id),
            'Impossible de récupérer la durée de vos sessions.'
        );
    }, []);

    // API call (user performance)
    useEffect(() => {
        setIsPerformanceLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await handleFetch(path, id);
            retrievedData
                ? setPerformanceData(retrievedData.data.data)
                : setPerformanceError(errorMessage);
            setIsPerformanceLoading(false);
        };
        fetchData(
            endpoint.performanceEndpoint(id),
            'Impossible de récupérer vos performances.'
        );
    }, []);

    return (
        <div className="profile-content">
            <WelcomingInfo
                firstName={userData}
                loading={isUserInfoLoading}
                error={userInfoError}
            />
            <div className={classes.stat}>
                <GraphContainer
                    GraphElement={
                        <ActivityGraph
                            graphData={activityData}
                            loading={isActivityLoading}
                            error={activityError}
                        />
                    }
                    cssClasses={'activity-graph'}
                />
                <GraphContainer
                    GraphElement={
                        <SessionLengthGraph
                            graphData={sessionLengthData}
                            loading={isSessionLengthLoading}
                            error={sessionLengthError}
                        />
                    }
                    cssClasses={'session-length-graph'}
                />
                <GraphContainer
                    GraphElement={
                        <SkillsGraph
                            graphData={performanceData}
                            loading={isPerformanceLoading}
                            error={performanceError}
                        />
                    }
                    cssClasses={'skills-graph'}
                />
                <GraphContainer
                    GraphElement={
                        <ScoreGraph
                            graphData={userScore}
                            scoreValue={userScoreValue}
                            loading={isUserInfoLoading}
                            error={userInfoError}
                        />
                    }
                    cssClasses={'score-graph'}
                />
                <NutritionInformationContainer
                    nutritionData={userKeyData}
                    loading={isUserInfoLoading}
                    error={userInfoError}
                />
            </div>
        </div>
    );
}

export default Profile;
