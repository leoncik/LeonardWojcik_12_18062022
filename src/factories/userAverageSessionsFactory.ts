export interface IUserAverageSessions {
    data: {
        sessions: Array<ISessions>;
    };
}

export interface ISessions {
    day: number | string;
    sessionLength: number;
}

const userAverageSessionsFactory = (userData: IUserAverageSessions) => {
    // Format sessions dates
    const formatSessionDays = (sessions: Array<ISessions>) => {
        const daysLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        sessions.map(
            (session: ISessions, index) => (session.day = daysLetters[index])
        );
        return sessions;
    };

    return {
        formatSessionDays,
    };
};

export default userAverageSessionsFactory;
