import {
    IUserAverageSessions,
    IAverageSessions,
} from '../interfaces/fetchedApiData';

const userAverageSessionsFactory = (userData: IUserAverageSessions) => {
    // Format sessions dates
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
