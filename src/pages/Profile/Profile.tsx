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
import { genericFetch } from '../../helpers/genericFetch';

// Interfaces
import {
    IActivitySessions,
    IUserInfoData,
    IAverageSessions,
    IPerformanceData,
    IKeyData,
} from '../../interfaces/fetchedApiData';

function Profile() {
    const { id } = useParams();

    // Loading states
    const [isActivityLoading, setIsActivityLoading] = useState(true);
    const [isPerformanceLoading, setIsPerformanceLoading] = useState(true);
    const [isSessionLengthLoading, setIsSessionLengthLoading] = useState(true);
    const [isUserInfoLoading, setIsUserInfoLoading] = useState(true);

    // Error states
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
            const retrievedData = await genericFetch(path);
            if (retrievedData) {
                console.log(retrievedData);
                setUserData(retrievedData.data.userInfos.firstName);
                setUserScore(retrievedData.data.score);
                setUserScoreValue(retrievedData.data.scoreValue);
                setUserKeyData(retrievedData.data.keyData);
            } else {
                setUserInfoError(errorMessage);
            }
            setIsUserInfoLoading(false);
        };
        fetchData(
            `../../../src/helpers/MOCKED_DATA/USER_${id}/MOCKED_USER_INFO.json`,
            'Impossible de récupérer vos données de profil.'
        );
    }, []);

    // API call (user activity)
    useEffect(() => {
        setIsActivityLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await genericFetch(path);
            retrievedData
                ? setActivityData(retrievedData.data.sessions)
                : setActivityError(errorMessage);
            setIsActivityLoading(false);
        };
        fetchData(
            `../../../src/helpers/MOCKED_DATA/USER_${id}/MOCKED_USER_ACTIVITY.json`,
            "Impossible de récupérer vos données d'activité."
        );
    }, []);

    // API call (user average session)
    useEffect(() => {
        setIsSessionLengthLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await genericFetch(path);
            retrievedData
                ? setSessionLengthData(retrievedData.sessions)
                : setSessionLengthError(errorMessage);
            setIsSessionLengthLoading(false);
        };
        fetchData(
            `../../../src/helpers/MOCKED_DATA/USER_${id}/MOCKED_USER_AVERAGE_SESSION.json`,
            'Impossible de récupérer la durée de vos sessions.'
        );
    }, []);

    // API call (user performance)
    useEffect(() => {
        setIsPerformanceLoading(true);
        const fetchData = async (path: string, errorMessage: string) => {
            const retrievedData = await genericFetch(path);
            retrievedData
                ? setPerformanceData(retrievedData.data.data)
                : setPerformanceError(errorMessage);
            setIsPerformanceLoading(false);
        };
        fetchData(
            `../../../src/helpers/MOCKED_DATA/USER_${id}/MOCKED_USER_PERFORMANCE.json`,
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
