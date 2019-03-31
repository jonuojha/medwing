import React, {Component} from 'react';
import './marker.scss';
import Button from "reactstrap/es/Button";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import InputGroup from "reactstrap/es/InputGroup";
import InputGroupAddon from "reactstrap/es/InputGroupAddon";
import Input from "reactstrap/es/Input";
import Spinner from "reactstrap/es/Spinner";
import MarkerService from "../../services/marker.service";

class Marker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            loading: false,
            name: ''
        }
    }

    componentDidMount() {
    }

    addressChange(e) {
        this.setState({name: e.target.value})
    }

    save(e) {
        this.setState({loading: true});
        e.preventDefault();
        MarkerService.renameMarker(this.props.marker.id, this.state.name).then(
            res => {
                this.setState({isEdit: false, loading: false});
                this.props.renameMarker(this.props.marker.id, this.state.name);
            },
            err => {

            }
        );
    }

    enableEdit() {
        this.setState({isEdit: true, name: this.props.marker.address});
    }

    deleteMarker(id) {
        this.setState({loading: true});
        MarkerService.deleteMarker(id).then(data => {
            this.props.deleteMarker(id);
            this.setState({loading: false});
        }, err => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div className="col-12 col-sm-6 mb-4">
                <Card className='position-relative'>
                    {
                        this.state.loading ?
                            <div className='overlay-spinner'><Spinner/></div>
                            : ''
                    }
                    <CardHeader>
                        {
                            this.state.isEdit ?
                                <form onSubmit={this.save.bind(this)}>
                                    <InputGroup>
                                        <Input value={this.state.name} onChange={this.addressChange.bind(this)}/>
                                        <InputGroupAddon addonType="append">
                                            <Button>Save</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </form> :
                                this.props.marker.address
                        }

                    </CardHeader>
                    <CardBody className='cord-body'>
                        <label>Latitude: </label> <label>{this.props.marker.lat}</label>
                        <br/>
                        <label>Longitude: </label> <label>{this.props.marker.lng}</label>

                        <div className='mt-4'>
                            <Button disabled={this.state.isEdit} className='' onClick={this.enableEdit.bind(this)}
                                    outline color="secondary"
                                    size="sm">EDIT</Button>
                            <Button disabled={this.state.isEdit}
                                    onClick={this.deleteMarker.bind(this, this.props.marker.id)} className='ml-3'
                                    outline color="secondary"
                                    size="sm">DELETE</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Marker
