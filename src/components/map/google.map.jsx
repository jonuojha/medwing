import React, {Component} from 'react'
import './google.map.scss'
import GoogleMapReact from 'google-map-react';
import {Constants} from "../../constants/constants";

class GoogleMap extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{key: Constants.GEO_API_KEY}}
                    defaultCenter={{
                        lat: 51.40,
                        lng: 10.45
                    }}
                    defaultZoom={5}>
                    {
                        this.props.markers.map((mark, index) =>
                            <div lat={mark.lat} lng={mark.lng} className='marker' key={index}>{''}</div>
                        )
                    }
                </GoogleMapReact>
            </div>
        )
    }
}

export default GoogleMap
