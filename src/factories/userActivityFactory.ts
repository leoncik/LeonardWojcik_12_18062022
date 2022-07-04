// Interfaces
interface IUserActivity {
    data: {
        userId: number;
        sessions: Array<ISessions>;
    };
}

interface ISessions {
    day: string | number;
    kilogram: number;
    calories: number;
}

// Factory function
const userActivityFactory = (userData: IUserActivity) => {
    // Get session info
    const getSession = (sessions: Array<ISessions>) => {
        // Replace date with session number
        sessions.map(
            (session: ISessions, index: number) => (session.day = index + 1)
        );
        return sessions;
    };

    return {
        getSession,
    };
};

export default userActivityFactory;
