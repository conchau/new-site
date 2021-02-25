// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const axiosConfig = axios.create({
// .. where we make our configurations
    baseURL: "http://localhost:3000/"
});

export default axiosConfig;