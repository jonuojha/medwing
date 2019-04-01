import axios from 'axios';

class HttpService {
    constructor() {
        this.isLocal = true;
        this.host = "http://localhost:8080";
    }

    getData(url) {
        return axios.get(`${this.host}${url}`);
    }

    updateData(url, data) {
        return axios.put(`${this.host}${url}`, data);
    }

    deleteData(url) {
        return axios.delete(`${this.host}${url}`);
    }

    postData(url, data) {
        return axios.post(`${this.host}${url}`, data);
    }
}

export default (new HttpService());
