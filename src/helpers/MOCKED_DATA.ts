export const MOCKED_DATA = [
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
                    // Todo : make function to keep only the first letter when displaying on graph
                    Lun: 60,
                    Mar: 46,
                    Mer: 97,
                    Jeu: 58,
                    Ven: 37,
                    Sam: 124,
                    Dim: 31,
                },
            ],
            skills: [
                {
                    Intensité: 82,
                    Vitesse: 46,
                    Force: 211,
                    Endurance: 190,
                    Énergie: 139,
                    Cardio: 124,
                },
            ],
            result: '14%',
        },
    },
];
