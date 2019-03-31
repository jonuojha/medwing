import HttpService from './http.serivce'

class MarkerService {
    constructor() {
        this.isLocal = true;
        this.basePath = '/api/markers';
    }

    getMarkers() {
        if (this.isLocal) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.getFromLocal());
                }, 2000)
            })
        }
        return HttpService.getData(this.basePath);
    }

    saveMarker(marker) {
        if (this.isLocal) {
            const markers = this.getFromLocal();
            markers.push(marker);
            this.setInLocal(markers);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(marker);
                }, 1500);
            })
        }
        return HttpService.postData(this.basePath, marker);
    }

    editMarker() {

    }

    deleteMarker(marker) {
        if (this.isLocal) {
            const markers = this.getFromLocal();
            this.setInLocal(markers.filter(t => t.address !== marker.address));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(marker);
                }, 200);
            })
        }
        return HttpService.postData(this.basePath, marker);
    }

    getFromLocal() {
        if (!localStorage.getItem('markers')) {
            return [];
        }
        return JSON.parse(localStorage.getItem('markers'));
    }

    setInLocal(markers) {
        localStorage.setItem('markers', JSON.stringify(markers));
    }
}

export default (new MarkerService())
