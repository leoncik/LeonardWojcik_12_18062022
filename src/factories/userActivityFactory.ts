// Interfaces
interface IUserActivity {
    data: {
        userId: number;
        sessions: Array<ISessions>;
    };
}

interface ISessions {
    day: string;
    kilogram: number;
    calories: number;
}

// Factory function
const userActivityFactory = (userData: IUserActivity) => {
    const { data } = userData;
    console.log(data.sessions[0].day);
    console.log(data.sessions);

    // Get session info
    const getSession = (sessions: Array<ISessions>) => {
        // sessions.map((session: ISessions, index: number) => session.day)
        const sessionNumber = sessions.map(
            (session: ISessions, index: number) => index + 1
        );
        console.log(sessionNumber);
        return sessionNumber;
    };

    return {
        getSession,
    };
};

export default userActivityFactory;
