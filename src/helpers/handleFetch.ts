// Helpers
import { genericFetch } from './genericFetch';
import handleFormatData from './handleFormatData';

async function handleFetch(
    path: string,
    errorMessage: string,
    id: string | undefined
) {
    try {
        const fetchedData: any = await genericFetch(path);
        const data = handleFormatData(fetchedData, path, id);
        return data;
    } catch (error) {
        console.log(error, errorMessage);
    }
}

export default handleFetch;
