import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params:{
        key: 'ee452f37750e4e3aa8472af64748735b'
    }
})