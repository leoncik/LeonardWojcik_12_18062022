// User info
export interface IUserInfo {
    data: IUserInfoData;
}

export interface IUserInfoData {
    id: number;
    keyData: IKeyData;
    score: number;
    todayScore: number;
    userInfos: IUserProfile;
}

export interface IKeyData {
    calorieCount: number | string;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
}

export interface IUserProfile {
    age: number;
    firstName: string;
    lastName: string;
}

// User activity
export interface IUserActivity {
    data: {
        userId: number;
        sessions: Array<IActivitySessions>;
    };
}

export interface IActivitySessions {
    day: string | number;
    kilogram: number;
    calories: number;
}

// User average sessions
export interface IUserAverageSessions {
    data: {
        sessions: Array<IAverageSessions>;
    };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAverageSessions {
    // Input data day should be number and output data day should be string.
    day: any;
    sessionLength: number;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// User performance
export interface IUserPerformance {
    data: {
        data: Array<IPerformanceData>;
        kind: Record<number, string>;
        userId: number;
    };
}

export interface IPerformanceData {
    value: number;
    kind: number | string;
}

// Fetch object
export interface IFetchObject {
    status: number;
    body:
        | string
        | IUserInfo
        | IUserActivity
        | IUserAverageSessions
        | IUserPerformance;
}
