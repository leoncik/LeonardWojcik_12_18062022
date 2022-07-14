import { IAverageSessions } from '../interfaces/fetchedApiData';

const userAverageSessionsFactory = () => {
    /**
     * Format sessions dates with first letter of the day.
     * @param {Array<IAverageSessions>} sessions - Average session length data.
     * @returns - Last 7 sessions days formatted.
     */
    const formatSessionDays = (sessions: Array<IAverageSessions>) => {
        const daysLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        sessions.map(
            (session: IAverageSessions) =>
                (session.day = daysLetters[parseInt(session.day) - 1])
        );
        if (sessions.length > 7) {
            sessions = sessions.slice(sessions.length - 7);
        }
        return sessions;
    };

    return {
        formatSessionDays,
    };
};

export default userAverageSessionsFactory;
