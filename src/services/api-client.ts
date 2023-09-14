import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '4e45decceaa840d9ac68043064723e34'
        //
    }
})