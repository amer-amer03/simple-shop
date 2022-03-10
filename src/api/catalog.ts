
const axios = require('axios').default;

export const getCatalogData = async () => {
    const res = await axios({
        method: 'get',
        url: '/assets/data/catalog.json',
    });

    return res.data;
};