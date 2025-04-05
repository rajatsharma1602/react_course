import axios from 'axios';

export async function searchImages(searchTerm) {
    const clientId = '8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y'
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${clientId}`
        },
        params: {
            query: searchTerm
        }
    })
    console.log("res", response)
    return response.data.results;
}
