import React, {Component} from 'react';
import './marker.scss';
import {Button, Card, CardHeader, CardBody, InputGroup, InputGroupAddon, Input, Spinner, Fade} from "reactstrap";
import MarkerService from "../../services/marker.service";

class Marker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            loading: false,
            newName: '',
            error: ''
        }
    }

    nameChange(e) {
        this.setState({newName: e.target.value})
    }

    /**
     * Will update respective marker name in database
     * @param e
     */
    saveNewName(e) {
        this.setState({loading: true, error: ''});
        e.preventDefault();
        MarkerService.renameMarker(this.props.marker.id, this.state.newName).then(
            res => {
                this.setState({isEdit: false, loading: false});
                this.props.loadMarkers();
            },
            err => {
                this.setState({loading: false, error: 'Failed to update name'});
            }
        );
    }

    /**
     * Will enable editing for marker name
     */
    enableEdit() {
        this.setState({isEdit: true, newName: this.props.marker.name});
    }

    /**
     * Delete marker
     * @param id
     */
    deleteMarker(id) {
        this.setState({loading: true, error: ''});
        MarkerService.deleteMarker(id).then(data => {
            this.props.loadMarkers();
            this.setState({loading: false});
        }, err => {
            this.setState({loading: false, error: 'Failed to delete marker'});
        });
    }

    render() {
        return (
            <div className="col-12 col-lg-6 mb-4">
                <Card className='position-relative'>
                    {
                        this.state.loading ?
                            <div className='overlay-spinner'><Spinner/></div>
                            : ''
                    }
                    <CardHeader>
                        {
                            this.state.isEdit ?
                                <form onSubmit={this.saveNewName.bind(this)}>
                                    <InputGroup>
                                        <Input value={this.state.newName} onChange={this.nameChange.bind(this)}/>
                                        <InputGroupAddon addonType="append">
                                            <Button disabled={!this.state.newName}>Save</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </form> :
                                this.props.marker.name
                        }

                    </CardHeader>
                    <CardBody className='cord-body'>
                        <p>{this.props.marker.address}</p>
                        <label>Latitude: </label> <label>{this.props.marker.lat}</label>
                        <br/>
                        <label>Longitude: </label> <label>{this.props.marker.lng}</label>

                        <div className='mt-4'>
                            <Button disabled={this.state.isEdit} className='mr-3' onClick={this.enableEdit.bind(this)}
                                    outline color="secondary"
                                    size="sm">EDIT</Button>
                            <Button disabled={this.state.isEdit}
                                    onClick={this.deleteMarker.bind(this, this.props.marker.id)} className=''
                                    outline color="secondary"
                                    size="sm">DELETE</Button>
                        </div>
                        <Fade in={!!this.state.error} tag="label" className="m-1">
                            {this.state.error}
                        </Fade>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Marker
