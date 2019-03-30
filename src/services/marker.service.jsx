class MarkerService {
    getMarkers() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    lat: 52.52,
                    lng: 13.40,
                    address: 'Berlin'
                },
                {
                    lat: 53.55,
                    lng: 9.99,
                    address: 'Hamburg'
                },
                {
                    lat: 48.13,
                    lng: 11.58,
                    address: 'Hamburg'
                }

            ]);
        })
    }

    saveMarker() {

    }

    editMarker() {

    }

    deleteMarker() {

    }
}

export default (new MarkerService())
