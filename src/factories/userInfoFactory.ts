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
    console.log(data.id);
};

export default userInfoFactory;
