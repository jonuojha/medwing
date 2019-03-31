import React, {Component} from 'react';
import './App.css';
import GoogleMap from "./components/map/google.map";
import Header from "./components/header/header";
import MarkerContainer from "./components/marker-container/marker-container";
import MarkerService from './services/marker.service'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            loading: true
        }
    }

    componentDidMount() {
        MarkerService.getMarkers().then(data => {
            console.log('promise data', data);
            this.setState({markers: data, loading: false});
        }, err => {
            this.setState({loading: false});
        })
    }

    addNewMarker(marker) {
        console.log(marker);
        this.setState({markers: [...this.state.markers, marker]});
    }


    deleteMarker(marker) {
        console.log(marker);
        this.setState({markers: this.state.markers.filter(t => t.address !== marker.address)});
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
                            addNewMarker={this.addNewMarker.bind(this)}
                            deleteMarker={this.deleteMarker.bind(this)}
                            markers={this.state.markers}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
