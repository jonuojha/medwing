import axios from 'axios';

class HttpService {
    constructor() {
        this.baseUrl = "/api";
    }

    getData(url) {
        return axios.get(`${url}`);
    }

    updateData(url, data) {
        return axios.put(`${url}`, data);
    }

    deleteData(url) {
        return axios.delete(`${url}`);
    }

    postData(url, data) {
        return axios.post(`${this.baseUrl}${url}`, data);
    }
}

export default (new HttpService());
