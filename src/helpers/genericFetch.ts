export const genericFetch = async (
    url: string,
    err = 'ERREUR : impossible de récupérer les données. Veuillez réessayer plus tard.',
    method = 'GET',
    headers = {}
) => {
    try {
        const response = await fetch(url, { method, headers });
        return await response.json();
    } catch (error) {
        console.log(error, err);
    }
};
