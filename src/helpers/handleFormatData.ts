// Factories
import userActivityFactory from '../factories/userActivityFactory';
import userAverageSessionsFactory from '../factories/userAverageSessionsFactory';
import userPerformanceFactory from '../factories/userPerformanceFactory';
import userInfoFactory from '../factories/userInfoFactory';

// Helpers
import * as endpoint from '../helpers/apiEndpoints';

const handleFormatData = (
    fetchedData: any,
    path: string,
    id: string | undefined
) => {
    switch (path) {
        case endpoint.userEndpoint(id): {
            const scoreData = userInfoFactory(fetchedData).getScore(
                fetchedData.data
            );
            const scoreValue = userInfoFactory(fetchedData).getScore(
                fetchedData.data
            )[0].score;
            const nutritionData = userInfoFactory(fetchedData).formatCalories(
                fetchedData.data.keyData
            );
            return { fetchedData, scoreData, nutritionData, scoreValue };
        }

        case endpoint.averageSessionEndpoint(id): {
            const averageSessionData = userAverageSessionsFactory(
                fetchedData
            ).formatSessionDays(fetchedData.data.sessions);
            return averageSessionData;
        }

        case endpoint.performanceEndpoint(id): {
            userPerformanceFactory(fetchedData).translateSkills(
                fetchedData.data.kind
            );
            userPerformanceFactory(fetchedData).formatData(fetchedData.data);
            return fetchedData;
        }

        case endpoint.activityEndpoint(id): {
            userActivityFactory(fetchedData).getSession(
                fetchedData.data.sessions
            );
            return fetchedData;
        }

        default:
            break;
    }
};

export default handleFormatData;
