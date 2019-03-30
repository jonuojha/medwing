import React, {Component} from 'react'
import './marker-container.scss'
import InputGroupAddon from "reactstrap/es/InputGroupAddon";
import InputGroup from "reactstrap/es/InputGroup";
import Button from "reactstrap/es/Button";
import Input from "reactstrap/es/Input";
import Spinner from "reactstrap/es/Spinner";
import Marker from "../marker/marker";

class MarkerContainer extends Component {

    clicked() {
        alert('he');
    }

    addressChange() {
        alert('he');
    }

    render() {
        return (
            <div className='marker-container'>
                <h2>YOUR MARKERS</h2>
                <hr/>
                <div className='input-container pt-4'>
                    <InputGroup>
                        <Input onChange={this.addressChange.bind(this)}
                               placeholder="Enter address"/>
                        <InputGroupAddon addonType="append">
                            <Button onClick={this.clicked.bind(this)}>Add Address</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {/*<Spinner/>*/}
                </div>
                <div
                    className='pt-4 markers row'>
                    <Marker/>
                    <Marker/>
                </div>
            </div>
        )
    }
}

export default MarkerContainer;
