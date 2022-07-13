// Interfaces
import { IActivitySessions } from '../interfaces/fetchedApiData';

const userActivityFactory = () => {
    /**
     * Replace session date by It's number.
     * @param {Array<IActivitySessions>} sessions - Activity sessions data.
     * @returns Last 7 sessions with formatted sessions number.
     */
    const getSession = (sessions: Array<IActivitySessions>) => {
        sessions.map(
            (session: IActivitySessions, index: number) =>
                (session.day = index + 1)
        );
        if (sessions.length > 7) {
            sessions = sessions.slice(sessions.length - 7);
        }
        return sessions;
    };

    return {
        getSession,
    };
};

export default userActivityFactory;
