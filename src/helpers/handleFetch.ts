// Helpers
import { genericFetch } from './genericFetch';
import handleFormatData from './handleFormatData';

async function handleFetch(path: string, id: string | undefined) {
    const fetchedData: any = await genericFetch(path);
    const data = handleFormatData(fetchedData, path, id);
    return data;
}

export default handleFetch;
