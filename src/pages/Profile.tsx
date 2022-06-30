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

function Profile() {
    const { id } = useParams();
    const [userData, setUserData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // API call (user info)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (
            url: string,
            err = 'ERREUR : impossible de récupérer les données de votre profil. Veuillez réessayer plus tard.',
            method = 'GET',
            headers = {}
        ) => {
            try {
                const response = await fetch(url, { method, headers });
                console.log('test');
                const myUser = await response.json();
                // console.log(myUser);
                // console.log(myUser.data.userInfos.firstName);
                userInfoFactory(myUser);
                setUserData(myUser.data.userInfos.firstName);
                setIsLoading(false);
                setError('');
            } catch (error) {
                console.log(error, err);
                setIsLoading(false);
                setError(err);
            }
            console.log(userData);
        };
        fetchData(`http://localhost:3000/user/${id}`);
    }, []);

    // API call (user activity)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (
            url: string,
            err = 'Impossible de récupérée les données concernant votre activité.',
            method = 'GET',
            headers = {}
        ) => {
            try {
                const response = await fetch(url, { method, headers });
                const activityData = await response.json();
                userActivityFactory(activityData);
                // Format date
                userActivityFactory(activityData).getSession(
                    activityData.data.sessions
                );
            } catch (error) {
                console.log(error, err);
            }
            console.log(userData);
        };
        fetchData(`http://localhost:3000/user/${id}/activity`);
    }, []);

    // API call (user average session)
    const [sessionLength, setSessionLength] = useState<unknown | null>([]);
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async (
            url: string,
            err = 'Impossible de récupérée les données concernant la durée des sessions.',
            method = 'GET',
            headers = {}
        ) => {
            try {
                const response = await fetch(url, { method, headers });
                const activityData = await response.json();
                userAverageSessionsFactory(activityData).formatSessionDays(
                    activityData.data.sessions
                );
                setSessionLength(
                    userAverageSessionsFactory(activityData).formatSessionDays(
                        activityData.data.sessions
                    )
                );
            } catch (error) {
                console.log(error, err);
            }
        };
        fetchData(`http://localhost:3000/user/${id}/average-sessions`);
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
