import { useEffect, useState } from 'react';

import NutritionInformationContainer from '../components/NutritionInformationContainer/NutritionInformation';
import WelcomingInfo from '../components/WelcomingInfo/WelcomingInfo';

// Graphs components
import GraphContainer from '../components/Graphs/GraphContainer/GraphContainer';
import SkillsGraph from '../components/Graphs/SkillsGraph/SkillsGraph';
import ScoreGraph from '../components/Graphs/ScoreGraph/ScoreGraph';
import SessionLengthGraph from '../components/Graphs/SessionLengthGraph/SessionLengthGraph';
import ActivityGraph from '../components/Graphs/ActivityGraph/ActivityGraph';

// Mocked data
import { MOCKED_DATA } from '../helpers/MOCKED_DATA';

// CSS
import classes from './Profile.module.css';

function Profile() {
    // API call
    const [userData, setUserData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
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
                console.log(myUser.data.userInfos.firstName);
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
        fetchData('http://localhost:3000/user/18');
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
                </>
            )}
        </div>
    );
}

export default Profile;
