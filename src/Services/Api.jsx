import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';
const fetchArtist = async () => {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
}

const fetchAlbums = async () => {
    const response = await axios.get(`${baseUrl}/albums`);
    return response.data;
}

const fetchTweets = async () => {
    const response = await axios.get(`${baseUrl}/comments`);
    return response.data;
}