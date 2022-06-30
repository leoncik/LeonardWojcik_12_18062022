interface IUserAverageSessions {
    data: {
        sessions: Array<{
            day: number;
            sessionLength: number;
        }>;
    };
}

const userAverageSessionsFactory = (userData: IUserAverageSessions) => {
    const { data } = userData;
    console.log(data.sessions);

    // Format session date
    const getSession = (sessions: Array<IUserAverageSessions>) => {
        const sessionDaysConversion = {
            0: 'L',
            1: 'M',
            2: 'M',
            3: 'J',
            4: 'V',
            5: 'S',
            6: 'D',
        };
        const sessionDays = sessions.map(
            (session: IUserAverageSessions, index) =>
                console.log(session, index)
        );
        console.log(sessionDays);
        return sessionDays;
    };
};

export default userAverageSessionsFactory;
