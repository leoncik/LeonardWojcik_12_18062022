/**
 * Fetches data from url.
 * @param {string} url - Fetched url
 * @param {string} method  - Fetch method (set to 'GET')
 * @param headers
 * @returns {}
 */
export const genericFetch = async (
    url: string,
    method = 'GET',
    headers = {}
) => {
    try {
        const response = await fetch(url, { method, headers });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
