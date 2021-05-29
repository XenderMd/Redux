import axios from 'axios';


const KEY='AIzaSyAsSrMbAzFe3dY8eWEVAaW1qI6Gsd7V6CY';

export default axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        key: KEY,
        type:'video'
    }
})