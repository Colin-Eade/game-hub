import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7a1edd973820405490fb958c58d8999b',
    },
});
