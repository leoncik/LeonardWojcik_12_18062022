// Helpers
import { genericFetch } from './genericFetch';
import handleFormatData from './handleFormatData';

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
