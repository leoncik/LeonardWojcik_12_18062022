const apiBaseUrl = 'http://localhost:3000';

/**
 * Retrieves information from a user. This endpoint includes :
 * the user id,
 * user information (first name, last name and age),
 * the current day's score (todayScore)
 * key data (calories, lipids, etc.)
 * @param {number} id - id of the user
 * @returns {string} Returns the endpoint for the user informations.
 */
const userEndpoint = (id: string | undefined): string =>
    `${apiBaseUrl}/user/${id}`;

/**
 * Retrieves a user's activity day by day with kilograms and calories.
 * @param {number} id - id of the user
 * @returns {string} Returns the endpoint for the user activity.
 */
const activityEndpoint = (id: string | undefined): string =>
    `${apiBaseUrl}/user/${id}/activity`;

/**
 * Retrieves the average sessions of a user per day. The week starts on Monday.
 * @param {number} id - id of the user
 * @returns {string} Returns the endpoint for the user average sessions.
 */
const averageSessionEndpoint = (id: string | undefined): string =>
    `${apiBaseUrl}/user/${id}/average-sessions`;

/**
 * Retrieves a user's performance (energy, endurance, etc.)
 * @param {number} id - id of the user
 * @returns {string} Returns the endpoint for the user performance.
 */
const performanceEndpoint = (id: number): string =>
    `${apiBaseUrl}/user/${id}/performance`;

export {
    userEndpoint,
    activityEndpoint,
    averageSessionEndpoint,
    performanceEndpoint,
};
