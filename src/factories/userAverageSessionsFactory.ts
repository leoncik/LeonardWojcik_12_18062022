import { IAverageSessions } from '../interfaces/fetchedApiData';

const userAverageSessionsFactory = () => {
    /**
     * Format sessions dates with first letter of the day.
     * @param {Array<IAverageSessions>} sessions - Average session length data.
     * @returns - Formatted session days.
     */
    const formatSessionDays = (sessions: Array<IAverageSessions>) => {
        const daysLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        sessions.map(
            (session: IAverageSessions, index) =>
                (session.day = daysLetters[index])
        );
        return sessions;
    };

    return {
        formatSessionDays,
    };
};

export default userAverageSessionsFactory;
