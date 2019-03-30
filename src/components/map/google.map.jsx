import React, {Component} from 'react'
import GoogleMapReact from "google-map-react";
import './google.map.scss'

class GoogleMap extends Component {

    renderMarkers(map, maps) {
        new maps.Marker({
            position: {
                lat: 59.95,
                lng: 30.33
            },
            map,
            title: 'Hello World!'
        });

        new maps.Marker({
            position: {
                lat: 59.90,
                lng: 30.33
            },
            map,
            title: 'Hello World!'
        });
        new maps.Marker({
            position: {
                lat: 59.90,
                lng: 30.34
            },
            map,
            title: 'Hello World!'
        });
    }

    render() {
        return (
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyC60fyHb2IlmWqNEvC7FC43f71gfV5TgI0'}}
                    defaultCenter={{
                        lat: 51.40,
                        lng: 10.45
                    }}
                    onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                    defaultZoom={6}
                >
                </GoogleMapReact>
            </div>
        )
    }
}

export default GoogleMap
