import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';
export const fetchArtist = async () => {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
}

export const fetchAlbums = async (artistId) => {
    const response = await axios.get(`${baseUrl}/albums?userId=${artistId}`);
    return response.data;
}

export const fetchAlbumsPhotos = async (albumId) => {
    const response = await axios.get(`${baseUrl}/albums/${albumId}/photos`);
    return response.data;
}

export const fetchTweets = async () => {
    const response = await axios.get(`${baseUrl}/comments`);
    return response.data;
}

export const CreateTweets = async (artistId, tweet) => {
    try {
        const response = await axios.post(`${baseUrl}/posts`, {
            userId: artistId,
            title: tweet,
        });
        return response.data;
    } catch (error) {
        console.error('Error posting tweet:', error);
        throw error;
    }
}