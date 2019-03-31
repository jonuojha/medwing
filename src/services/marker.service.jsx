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

    renameMarker(id, newName) {
        if (this.isLocal) {
            const markers = this.getFromLocal();
            const found = markers.find(t => t.id === id);
            found.address = newName;
            this.setInLocal(markers);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(newName);
                }, 1500);
            })
        }
        const url = `${this.basePath}/${id}`;
        return HttpService.updateData(url, {newName});
    }

    deleteMarker(markerId) {
        if (this.isLocal) {
            const markers = this.getFromLocal();
            this.setInLocal(markers.filter(t => t.id !== markerId));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(markerId);
                }, 200);
            })
        }
        const url = `${this.basePath}/${markerId}`;
        return HttpService.deleteData(url);
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
