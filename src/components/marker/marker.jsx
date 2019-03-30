import React, {Component} from 'react';
import './marker.scss';
import Button from "reactstrap/es/Button";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import InputGroup from "reactstrap/es/InputGroup";
import InputGroupAddon from "reactstrap/es/InputGroupAddon";
import Input from "reactstrap/es/Input";

class Marker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    addressChange() {

    }

    save() {
        this.setState({isEdit: false});
    }

    enableEdit() {
        this.setState({isEdit: true});
    }

    render() {
        return (
            <div className="col-12 col-sm-6 mb-4">
                <Card className=''>
                    {/*<h3>Berlin</h3>*/}
                    <CardHeader>
                        {
                            this.state.isEdit ?
                                <InputGroup>
                                    <Input onChange={this.addressChange.bind(this)}/>
                                    <InputGroupAddon addonType="append">
                                        <Button onClick={this.save.bind(this)}>Save</Button>
                                    </InputGroupAddon>
                                </InputGroup> :
                                'Berlin'
                        }

                    </CardHeader>
                    <CardBody className='cord-body'>
                        <label>Latitude: </label> <label>50.43</label>
                        <br/>
                        <label>Longitude: </label> <label>30.32</label>

                        <div className='mt-4'>
                            <Button disabled={this.state.isEdit} className='' onClick={this.enableEdit.bind(this)} outline color="secondary"
                                    size="sm">EDIT</Button>
                            <Button disabled={this.state.isEdit} className='ml-3' outline color="secondary" size="sm">DELETE</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Marker
