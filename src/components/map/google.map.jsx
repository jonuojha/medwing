import React, {Component} from 'react'
import './google.map.scss'
import GoogleMapReact from 'google-map-react';
import {Constants} from "../../constants/constants";

// const Marker = <div className="SuperAwesomePin">AA</div>;


class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }

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
                        this.props.markers.map(mark =>
                            <div lat={mark.lat} lng={mark.lng} className='marker'>A</div>
                        )
                    }
                </GoogleMapReact>
            </div>
        )
    }
}

export default GoogleMap
