interface IUserInfo {
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

const userInfoFactory = (userData: IUserInfo) => {
    const { data } = userData;
    // console.log(data.id);
    const getScore = (user: any): any => {
        // ! There are two different key for user score.
        const score = [
            {
                score: user.score ? user.score : user.todayScore,
            },
        ];
        return score;
    };

    return {
        getScore,
    };
};

export default userInfoFactory;
