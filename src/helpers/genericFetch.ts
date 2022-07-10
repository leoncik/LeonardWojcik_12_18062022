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
