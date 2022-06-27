interface MOCKED_DATAInterface {
    id: number;
    firstName: string;
    lastName: string;
    nutritionInfo: Array<{ type: string; quantity: number; unit: string }>;
    activityInfo: {
        dailyActivity: Array<{ day: number; weight: number; calories: number }>;
        sessionsLength: Array<{ Day: string; Length: number }>;
        skills: Array<{ type: string; value: number }>;
        result: Array<{ value: number }>;
    };
}

export const MOCKED_DATA: MOCKED_DATAInterface[] = [
    {
        id: 1,
        firstName: 'Rocky',
        lastName: 'Balboa',
        nutritionInfo: [
            {
                type: 'Calories',
                quantity: 42,
                unit: 'kCal',
            },
            {
                type: 'Protéines',
                quantity: 666,
                unit: 'g',
            },
            {
                type: 'Glucides',
                quantity: 123,
                unit: 'g',
            },
            {
                type: 'Lipides',
                quantity: 9000,
                unit: 'g',
            },
        ],
        activityInfo: {
            dailyActivity: [
                {
                    day: 1,
                    weight: 78,
                    calories: 98,
                },
                {
                    day: 2,
                    weight: 76,
                    calories: 112,
                },
                {
                    day: 3,
                    weight: 77,
                    calories: 100,
                },
                {
                    day: 4,
                    weight: 86,
                    calories: 12,
                },
                {
                    day: 5,
                    weight: 81,
                    calories: 698,
                },
                {
                    day: 6,
                    weight: 92,
                    calories: 111,
                },
                {
                    day: 7,
                    weight: 88,
                    calories: 74,
                },
            ],
            sessionsLength: [
                {
                    Day: 'L',
                    Length: 60,
                },
                {
                    Day: 'M',
                    Length: 46,
                },
                {
                    Day: 'M',
                    Length: 97,
                },
                {
                    Day: 'J',
                    Length: 58,
                },
                {
                    Day: 'V',
                    Length: 37,
                },
                {
                    Day: 'S',
                    Length: 124,
                },
                {
                    Day: 'D',
                    Length: 31,
                },
            ],
            skills: [
                {
                    type: 'Intensité',
                    value: 82,
                },
                {
                    type: 'Vitesse',
                    value: 46,
                },
                {
                    type: 'Force',
                    value: 211,
                },
                {
                    type: 'Endurance',
                    value: 190,
                },
                {
                    type: 'Énergie',
                    value: 139,
                },
                {
                    type: 'Cardio',
                    value: 124,
                },
            ],
            result: [
                {
                    value: 0.42,
                },
            ],
        },
    },
];
