import HttpService from './http.serivce';
import {Constants} from "../constants/constants";

class GeocodeService {
    constructor() {
        this.geoApi = `https://maps.googleapis.com/maps/api/geocode/json?key=${Constants.GEO_API_KEY}`;
    }

    getGeocode(address) {
        const url = `${this.geoApi}&address=${address}`;
        return HttpService.getData(url).then(data => {
            return data.data.results.map(t => {
                return {
                    id: t.place_id,
                    lat: t.geometry.location.lat,
                    lng: t.geometry.location.lng,
                    address: t.formatted_address,
                    partialMatch: t.partial_match || false
                }
            });
        }).catch(e => {
            throw e
        });
    }
}

export default (new GeocodeService());
