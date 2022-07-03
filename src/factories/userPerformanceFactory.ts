interface IUserPerformance {
    data: {
        id: number;
        keyData: {
            calorieCount: number;
            carbohydrateCount: number;
            lipidCount: number;
            proteinCount: number;
        };
        score: number;
        userInfos: {
            age: number;
            firstName: string;
            lastName: string;
        };
    };
}

const userPerformanceFactory = (userData: IUserPerformance) => {
    const { data } = userData;
    // console.log(data.id);
    // Format sessions dates
    const translateSkills = (performance: any) => {
        // const daysLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        // sessions.map(
        //     (session: ISessions, index) => (session.day = daysLetters[index])
        // );
        // return sessions;
        // ! This is returning the array of days only
        // const formattedAverageSession = sessions.map((session: ISessions, index) => (session.day = daysLetters[index]))
        // return formattedAverageSession
    };

    return {
        translateSkills,
    };
};

export default userPerformanceFactory;
