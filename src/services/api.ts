import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.31:3030'
})

export default api;