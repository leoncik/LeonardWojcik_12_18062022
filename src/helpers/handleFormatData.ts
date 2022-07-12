// Factories
import userActivityFactory from '../factories/userActivityFactory';
import userAverageSessionsFactory from '../factories/userAverageSessionsFactory';
import userPerformanceFactory from '../factories/userPerformanceFactory';
import userInfoFactory from '../factories/userInfoFactory';

// Helpers
import * as endpoint from '../helpers/apiEndpoints';

// Interfaces
import { IUserInfo, IUserActivity } from '../interfaces/fetchedApiData';

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Format data according to API endpoint.
 * @param fetchedData Retrieved data.
 * @param {string} path API endpoint.
 * @param {string} id - User's id.
 * @returns Formatted data.
 */
const handleFormatData = (
    fetchedData: IUserInfo | IUserActivity | any,
    path: string,
    id: string | undefined
) => {
    switch (path) {
        case endpoint.userEndpoint(id): {
            const scoreData = userInfoFactory().getScore(fetchedData.data);
            const scoreValue = userInfoFactory().getScore(fetchedData.data)[0]
                .score;
            const nutritionData = userInfoFactory().formatCalories(
                fetchedData.data.keyData
            );
            return { fetchedData, scoreData, nutritionData, scoreValue };
        }

        case endpoint.averageSessionEndpoint(id): {
            const averageSessionData =
                userAverageSessionsFactory().formatSessionDays(
                    fetchedData.data.sessions
                );
            return averageSessionData;
        }

        case endpoint.performanceEndpoint(id): {
            userPerformanceFactory().translateSkills(fetchedData.data.kind);
            userPerformanceFactory().formatData(fetchedData.data);
            return fetchedData;
        }

        case endpoint.activityEndpoint(id): {
            userActivityFactory().getSession(fetchedData.data.sessions);
            return fetchedData;
        }

        default:
            break;
    }
};

/* eslint-enable @typescript-eslint/no-explicit-any */

export default handleFormatData;
