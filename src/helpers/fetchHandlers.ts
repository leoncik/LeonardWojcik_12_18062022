// Helpers
import handleFormatData from './handleFormatData';

// Interfaces
import { IFetchObject } from '../interfaces/fetchedApiData';

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
    const response = await fetch(url, { method, headers });
    const body = await response.json();
    const { status } = response;
    const isSuccess = false;
    const responseObject = { status, body, isSuccess };
    return responseObject;
};

/**
 * Checks if the status of a fetch is ok
 * @param {IFetchObject} data - Fetched data.
 * @returns {boolean}
 */
export const isStatusOk = (data: IFetchObject) =>
    data.status < 300 && data.status >= 200 ? true : false;

/**
 * Fetch data from url and format It.
 * @param {string} path - API endpoint to fetch data
 * @param {string} id - User's id
 * @returns Formatted data
 */
export async function handleFetch(path: string, id: string | undefined) {
    const fetchedData = await genericFetch(path);
    if (isStatusOk(fetchedData)) {
        fetchedData.body = handleFormatData(fetchedData.body, path, id);
        fetchedData.isSuccess = true;
    } else {
        fetchedData.isSuccess = false;
    }
    return fetchedData;
}
