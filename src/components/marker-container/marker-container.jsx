import React, {Component} from 'react'
import './marker-container.scss'
import {InputGroupAddon, InputGroup, Button, Input, Fade, Spinner} from "reactstrap";
import Marker from "../marker/marker";
import GeocodeService from '../../services/geocode.service'
import MerkerService from '../../services/marker.service';

class MarkerContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: '',
            searching: false,
            results: [],
            error: '',
            dropdownOpen: true
        }
    }

    /**
     * Will search for given address with Geocode apis
     * @param e
     */
    findAddress(e) {
        e.preventDefault();
        this.setState({searching: true, error: ''});
        GeocodeService.getGeocode(this.state.address).then(resp => {
                switch (resp.length) {
                    case 0:
                        this.setState({error: 'No results found', searching: false});
                        break;
                    case 1:
                        this.selectAddress(resp[0]);
                        break;
                    default:
                        this.setState({results: resp, searching: false});
                }
            },
            error => {
                this.setState({error: 'Something went wrong.', searching: false});
            });
    }

    addressChange(e) {
        this.setState({address: e.target.value, error: ''})
    }

    /**
     * If address is valid, this method will save marker at backend with it's not duplicate
     * @param marker
     */
    selectAddress(marker) {
        this.setState({error: ''});

        // Check if address already exists
        const found = this.props.markers.find(mark => marker.address === mark.address);
        if (found) {
            this.setState({error: 'This address already exists.', searching: false});
        } else {
            MerkerService.saveMarker(marker).then(data => {
                this.props.loadMarkers();
                this.setState({results: [], address: '', searching: false});
            }, err => {
                this.setState({error: 'Failed to save address, please try again.', searching: false});
            });

        }
    }

    render() {
        return (
            <div className='marker-container'>
                <div className='input-container'>
                    <form onSubmit={this.findAddress.bind(this)}>
                        <InputGroup>

                            <Input onChange={this.addressChange.bind(this)}
                                   placeholder="Enter address"
                                   value={this.state.address}/>

                            <InputGroupAddon addonType="append">
                                <Button
                                    disabled={this.state.searching || !this.state.address}
                                    color='primary'>
                                    {this.state.searching ? 'Searching...' : 'Add Address'}
                                </Button>
                            </InputGroupAddon>

                        </InputGroup>
                    </form>

                    {
                        this.state.results.length > 1 ?
                            <div className='address-options p-2'>
                                <span className='mt-2'>Multiple addresses found, choose your option</span>
                                <ul>
                                    {
                                        this.state.results.map(mark =>
                                            <li className='p-2'
                                                onClick={this.selectAddress.bind(this, mark)}>{mark.address}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            : ''
                    }


                    <Fade in={!!this.state.error} tag="label" className="m-1">
                        {this.state.error}
                    </Fade>
                </div>
                <h2 className='pt-4'>YOUR MARKERS</h2>
                <hr/>
                <div className='spinner'>
                    {
                        this.props.loading ?
                            <Spinner className='mt-5'/>
                            :
                            this.props.error ?
                                <Fade in={!!this.props.error} tag="label" className="m-1">
                                    {this.props.error}
                                </Fade>
                                : !this.props.markers.length ? <span>No markers</span> : ''
                    }
                </div>
                <div className='pt-2 markers row'>
                    {
                        this.props.markers.map((marker, index) =>
                            <Marker {...this.props} key={index} marker={marker}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default MarkerContainer;
