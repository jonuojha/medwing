import React, {Component} from 'react';
import './home.scss';
import GoogleMap from "../map/google.map";
import Header from "../header/header";
import MarkerContainer from "../marker-container/marker-container";
import MarkerService from '../../services/marker.service';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            loading: true,
            error: ''
        }
    }

    componentDidMount() {
        this.loadMarkers();
    }

    loadMarkers() {
        this.setState({loading: true, error: '', markers: []});
        MarkerService.getMarkers().then(data => {
            this.setState({markers: data, loading: false});
        }, err => {
            this.setState({loading: false, error: 'Failed to load markers'});
        })
    }

    render() {
        return (
            <div className="">
                <Header/>
                <div className="content row p-5">
                    <div className='col-12 col-md-6 mb-4'>
                        <GoogleMap markers={this.state.markers}/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <MarkerContainer
                            loading={this.state.loading}
                            error={this.state.error}
                            loadMarkers={this.loadMarkers.bind(this)}
                            markers={this.state.markers}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
