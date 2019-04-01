import HttpService from './http.serivce'

class MarkerService {
    constructor() {
        this.basePath = '/api/markers';
    }

    getMarkers() {
        if (HttpService.isLocal) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.getFromLocal());
                }, 200)
            })
        }
        return HttpService.getData(this.basePath).then(data => {
            return data.data;
        }).catch(e => {
            throw e
        });
    }

    saveMarker(marker) {
        if (HttpService.isLocal) {
            const markers = this.getFromLocal();
            markers.push(marker);
            this.setInLocal(markers);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(marker);
                }, 700);
            })
        }
        return HttpService.postData(this.basePath, marker);
    }

    renameMarker(id, newName) {
        if (HttpService.isLocal) {
            const markers = this.getFromLocal();
            markers.find(t => t.id === id).name = newName;
            this.setInLocal(markers);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(newName);
                }, 700);
            })
        }
        const url = `${this.basePath}/${id}`;
        return HttpService.updateData(url, {newName});
    }

    deleteMarker(markerId) {
        if (HttpService.isLocal) {
            const markers = this.getFromLocal();
            this.setInLocal(markers.filter(t => t.id !== markerId));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(markerId);
                }, 300);
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
