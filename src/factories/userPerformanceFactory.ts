import { IKeyData, IUserInfos } from '../factories/userInfoFactory';

interface IUserPerformance {
    data: {
        data: Array<IPerformanceData>;
        kind: Record<number, string>;
        userId: number;
    };
}

interface IPerformanceData {
    value: number;
    kind: number | string;
}

const userPerformanceFactory = (userData: IUserPerformance) => {
    const translateSkills = (performance: any) => {
        // const performanceDictionary = {
        //     "cardio": "Cardio",
        //     "energy": "Énergie",
        //     "endurance": "Endurance",
        //     "strength": "Force",
        //     "speed": "Vitesse",
        //     "intensity": "Intensité"
        // }

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

    const formatData = (performanceData: any) => {
        // Convert performanceNames into an array.
        const performanceNamesValues = Object.values(performanceData.kind);
        const performanceValues = performanceData.data;

        // Replace performance kind number with the associated name.
        performanceValues.map(
            (value: any, index: number) =>
                (value.kind = performanceNamesValues[index])
        );
    };

    return {
        translateSkills,
        formatData,
    };
};

export default userPerformanceFactory;
