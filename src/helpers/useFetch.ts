import { useState, useEffect } from 'react';

// Factories
import userAverageSessionsFactory from '../factories/userAverageSessionsFactory';

// Helpers
import { genericFetch } from './genericFetch';

function useFetch(url: string) {
    const [data, setData] = useState<unknown | null>(null);
    const [loading, setLoading] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        setLoading('');
        const fetchData = async (errorMessage: string) => {
            try {
                // Retrieve data
                const activityData: any = await genericFetch(url);
                // Format data
                // Todo : create a switch or a separate function to handle formatting according to the endpoint ?
                userAverageSessionsFactory(activityData).formatSessionDays(
                    activityData.data.sessions
                );
                // Set data
                setData(
                    userAverageSessionsFactory(activityData).formatSessionDays(
                        activityData.data.sessions
                    )
                );
            } catch (error) {
                console.log(error, errorMessage);
                setErr(errorMessage);
            }
        };
        fetchData('IMPOSSIBLE DE RÉCUPÉRER LA DURÉE DES SESSIONS');
    }, []);

    return { data, loading, err };
}

export default useFetch;
