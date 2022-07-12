// Interfaces
import { IActivitySessions } from '../interfaces/fetchedApiData';

// Factory function
const userActivityFactory = () => {
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
