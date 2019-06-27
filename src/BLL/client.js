import * as axios from 'axios';

const baseUrl = 'http://';
export const client = axios.create({
        baseUrl,
        withCredentials: true
});