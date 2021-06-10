import axios from 'axios';

export const brewdogAPI = axios.create({
    baseURL: 'https://api.punkapi.com/v2',

})

export const marvelAPI = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    
})

