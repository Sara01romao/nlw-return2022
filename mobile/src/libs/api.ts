import axios from 'axios';

export const api = axios.create({
    baseURL: "https://:3333"
})