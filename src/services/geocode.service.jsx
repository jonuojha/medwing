import {Constants} from "../constants/constants";
import axios from "axios";
import HttpService from './http.serivce';

class GeocodeService {
    constructor() {
        this.isLocal = true;
        this.geoApi = `https://maps.googleapis.com/maps/api/geocode/json?key=${Constants.GEO_API_KEY}`;
    }

    getGeocode(address) {
        const url = `${this.geoApi}&address=${address}`;
        return this.getPromise(url, address).then(data => {
            return data.data.results.map(t => {
                return {
                    id: t.place_id,
                    lat: t.geometry.location.lat,
                    lng: t.geometry.location.lng,
                    address: t.formatted_address,
                    name: t.formatted_address,
                    partialMatch: t.partial_match || false
                }
            });
        }).catch(e => {
            throw e
        });
    }

    getPromise(url, address) {
        return this.isLocal ? axios.get(url) : HttpService.getData(`/api/geocode?&address=${address}`)
    }
}

export default (new GeocodeService());
