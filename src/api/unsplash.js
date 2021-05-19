import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID xHWszvJZ-FqzM1mKYZ6pqdCkEz9O2s3NOAK4a3RbuTs'
    }
})