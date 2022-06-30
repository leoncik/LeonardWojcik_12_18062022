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
    console.log(data.sessions);

    // Format sessions dates
    const formatSessionDays = (sessions: Array<ISessions>) => {
        // Test with object
        // const sessionsDaysConversion = {
        //     0: 'L',
        //     1: 'M',
        //     2: 'M',
        //     3: 'J',
        //     4: 'V',
        //     5: 'S',
        //     6: 'D',
        // };

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
