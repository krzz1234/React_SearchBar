import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID hhmoSUg5Zke0G0yWc-oIdgFEZn4rhMI8Rh2xmvLb-4E'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;