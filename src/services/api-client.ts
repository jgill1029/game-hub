import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '2fbb7c8b1ed345048af87ce36439eed6'
    }
})