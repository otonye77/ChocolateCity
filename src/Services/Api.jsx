import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';
export const fetchArtist = async () => {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
}

export const fetchAlbums = async () => {
    const response = await axios.get(`${baseUrl}/albums?${artistId}`);
    return response.data;
}

export const fetchTweets = async () => {
    const response = await axios.get(`${baseUrl}/comments`);
    return response.data;
}