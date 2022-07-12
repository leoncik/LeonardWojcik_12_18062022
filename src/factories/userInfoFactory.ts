import { IUserInfoData, IKeyData } from '../interfaces/fetchedApiData';

const userInfoFactory = () => {
    /**
     * Retrieve user's score.
     * @param {IUserInfoData} user - User's info data.
     * @returns - User's score.
     */
    const getScore = (user: IUserInfoData): Array<{ score: number }> => {
        // ! Backend : there are two different keys for user score.
        const score = [
            {
                score: user.score ? user.score : user.todayScore,
            },
        ];
        return score;
    };

    /**
     * Format calories count (from Cal to Kcal)
     * @param {IKeyData} user - User's key data.
     * @returns - User's key data with formatted calories count.
     */
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
