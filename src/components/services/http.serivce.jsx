import axios from 'axios';

class HttpService {
    constructor() {
        this.baseUrl = "/api";
    }

    getData(url) {
        return axios.get(`${this.baseUrl}${url}`);
    }

    updateData(url, data) {
        return axios.put(`${this.baseUrl}${url}`, data);
    }

    postData(url, data) {
        return axios.post(`${this.baseUrl}${url}`, data);
    }
}

export default (new HttpService());
