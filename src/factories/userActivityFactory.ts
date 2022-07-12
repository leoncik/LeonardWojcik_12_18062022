// Interfaces
import { IActivitySessions } from '../interfaces/fetchedApiData';

const userActivityFactory = () => {
    /**
     * Replace session date by It's number.
     * @param {Array<IActivitySessions>} sessions - Activity sessions data.
     * @returns Formatted sessions number.
     */
    const getSession = (sessions: Array<IActivitySessions>) => {
        sessions.map(
            (session: IActivitySessions, index: number) =>
                (session.day = index + 1)
        );
        return sessions;
    };

    return {
        getSession,
    };
};

export default userActivityFactory;
