import {
    IUserPerformance,
    IPerformanceData,
} from '../interfaces/fetchedApiData';

const userPerformanceFactory = () => {
    /**
     * Translate performance kinds into French.
     * @param {Record<number, string>} performance - User's performance.
     * @returns - User's performance with skill types translated into French.
     */
    const translateSkills = (performance: Record<number, string>) => {
        const performanceDictionary = {
            1: 'Cardio',
            2: 'Énergie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité',
        };

        const translatedPerformanceNames = Object.assign(
            performance,
            performanceDictionary
        );
        return translatedPerformanceNames;
    };

    /**
     * Format performance data (update performance kind names).
     * @param {IUserPerformance['data']} performanceData - User's performance data.
     * @returns - Updated user's performance data.
     */
    const formatData = (performanceData: IUserPerformance['data']) => {
        // Convert performanceNames into an array.
        const performanceNamesValues = Object.values(performanceData.kind);
        const performanceValues = performanceData.data;

        // Replace performance kind number with the associated name.
        performanceValues.map(
            (value: IPerformanceData, index: number) =>
                (value.kind = performanceNamesValues[index])
        );
    };

    return {
        translateSkills,
        formatData,
    };
};

export default userPerformanceFactory;
