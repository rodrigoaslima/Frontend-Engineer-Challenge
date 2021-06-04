import axios from 'axios';

export const brewdogAPI = axios.create({
    baseURL: 'https://api.punkapi.com/v2',

})