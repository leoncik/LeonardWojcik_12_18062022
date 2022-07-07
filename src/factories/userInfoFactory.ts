interface IUserInfo {
    data: IUserInfoData;
}

interface IUserInfoData {
    id: number;
    keyData: IKeyData;
    score: number;
    todayScore: number;
    userInfos: IUserInfos;
}

export interface IKeyData {
    calorieCount: number | string;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
}

export interface IUserInfos {
    age: number;
    firstName: string;
    lastName: string;
}

const userInfoFactory = (userData: IUserInfo) => {
    const getScore = (user: IUserInfoData): Array<{ score: number }> => {
        // ! There are two different key for user score.
        const score = [
            {
                score: user.score ? user.score : user.todayScore,
            },
        ];
        return score;
    };

    const formatCalories = (user: IKeyData) => {
        user.calorieCount = user.calorieCount.toLocaleString('en-US');
        return user;
    };

    return {
        getScore,
        formatCalories,
    };
};

export default userInfoFactory;
