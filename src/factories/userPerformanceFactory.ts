import { IKeyData, IUserInfos } from '../factories/userInfoFactory';

interface IUserPerformance {
    data: {
        id: number;
        keyData: IKeyData;
        score: number;
        userInfos: IUserInfos;
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
