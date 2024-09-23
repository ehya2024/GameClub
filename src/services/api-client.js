import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9941edd835b742b0aa6d90327900fc3f'
    }
})