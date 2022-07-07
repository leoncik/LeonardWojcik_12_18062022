// Hooks
// import { useState } from "react";

// Helpers
import { genericFetch } from './genericFetch';
import handleFormatData from './handleFormatData';

async function handleFetch(
    path: string,
    errorMessage: string,
    id: string | undefined
) {
    // const [data, setData] = useState<unknown | null>(null);
    // const [loading, setLoading] = useState('');
    // const [err, setErr] = useState('');

    try {
        const fetchedData: any = await genericFetch(path);
        const data = handleFormatData(fetchedData, path, id);
        return data;
    } catch (error) {
        console.log(error, errorMessage);
        // setErr(error);
    }
}

export default handleFetch;
