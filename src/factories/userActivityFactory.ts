// Interfaces
import { IUserActivity, IActivitySessions } from '../interfaces/fetchedApiData';

// Factory function
const userActivityFactory = (userData: IUserActivity) => {
    // Get session info
    const getSession = (sessions: Array<IActivitySessions>) => {
        // Replace date with session number
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
