import React, {Component} from 'react'
import './marker-container.scss'
import InputGroupAddon from "reactstrap/es/InputGroupAddon";
import InputGroup from "reactstrap/es/InputGroup";
import Button from "reactstrap/es/Button";
import Input from "reactstrap/es/Input";

class MarkerContainer extends Component {
    render() {
        return (
            <div className='marker-container'>
                <h2>YOUR MARKERS</h2>
                <hr/>
                <div className='input-container'>
                    <InputGroup>
                        <Input/>
                        <InputGroupAddon addonType="append"><Button>Search Address</Button></InputGroupAddon>
                    </InputGroup>
                </div>
                <div className='markers'>
                    markers
                </div>
            </div>
        )
    }
}

export default MarkerContainer;
