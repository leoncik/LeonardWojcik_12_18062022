// Helpers
import { genericFetch } from './genericFetch';
import handleFormatData from './handleFormatData';

async function handleFetch(path: string, id: string | undefined) {
    const fetchedData = await genericFetch(path);
    let data;
    fetchedData === 'can not get user'
        ? (data = null)
        : (data = handleFormatData(fetchedData, path, id));
    return data;
}

export default handleFetch;
