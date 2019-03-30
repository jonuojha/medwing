import React, {Component} from 'react'
import './marker-container.scss'
import InputGroupAddon from "reactstrap/es/InputGroupAddon";
import InputGroup from "reactstrap/es/InputGroup";
import Button from "reactstrap/es/Button";
import Input from "reactstrap/es/Input";
import Marker from "../marker/marker";
import GeocodeService from '../../services/geocode.service'
import Fade from "reactstrap/es/Fade";
import Alert from "reactstrap/es/Alert";

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

    findAddress() {
        this.setState({searching: true, error: ''});
        GeocodeService.getGeocode(this.state.address).then(resp => {
                console.log(resp);

                if (!resp.length) {
                    this.setState({error: 'No results found'});
                }
                if (resp.length === 1) {
                    this.addToMarkerList(resp[0]);
                }

                this.setState({results: resp, searching: false});
            },
            error => {
                this.setState({error: 'Something went wrong.', searching: false});
            });
    }

    addressChange(e) {
        this.setState({address: e.target.value, error: ''})
    }

    selectAddress(address) {
        console.log(address);
        this.addToMarkerList(address);
    }

    addToMarkerList(marker) {
        this.props.addNewMarker(marker);
        this.setState({results: [], address: ''});
    }

    toggle() {

    }

    render() {
        return (
            <div className='marker-container'>
                <div className='input-container'>
                    <InputGroup>

                        <Input onChange={this.addressChange.bind(this)}
                               placeholder="Enter address"
                               value={this.state.address}
                               onClick={this.toggle} data-toggle="dropdown"/>

                        <InputGroupAddon addonType="append">
                            <Button onClick={this.findAddress.bind(this)}
                                    disabled={this.state.searching || !this.state.address}>
                                {this.state.searching ? 'Searching...' : 'Add Address'}
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {
                        this.state.results.length > 1 ?
                            <div className='address-options p-2'>
                                <span className='mt-2'>Multiple addresses found, choose your option</span>
                                <ul>
                                    {
                                        this.state.results.map(add =>
                                            <li className='p-2'
                                                onClick={this.selectAddress.bind(this, add)}>{add.address}</li>
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
