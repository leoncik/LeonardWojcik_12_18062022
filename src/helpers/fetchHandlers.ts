// Helpers
import handleFormatData from './handleFormatData';

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

/**
 * Fetch data from url and format It.
 * @param {string} path - API endpoint to fetch data
 * @param {string} id - User's id
 * @returns Formatted data
 */
async function handleFetch(path: string, id: string | undefined) {
    const fetchedData = await genericFetch(path);
    let data;
    fetchedData === 'can not get user'
        ? (data = null)
        : (data = handleFormatData(fetchedData, path, id));
    return data;
}

export default handleFetch;
