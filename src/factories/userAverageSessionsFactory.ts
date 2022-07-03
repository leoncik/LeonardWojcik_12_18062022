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
    const { data } = userData;
    // console.log(data.sessions);

    // Format sessions dates
    const formatSessionDays = (sessions: Array<ISessions>) => {
        const daysLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        sessions.map(
            (session: ISessions, index) => (session.day = daysLetters[index])
        );
        return sessions;

        // ! This is returning the array of days only
        // const formattedAverageSession = sessions.map((session: ISessions, index) => (session.day = daysLetters[index]))
        // return formattedAverageSession
    };

    return {
        formatSessionDays,
    };
};

export default userAverageSessionsFactory;
