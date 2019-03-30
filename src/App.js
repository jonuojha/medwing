import React, {Component} from 'react';
import './App.css';
import GoogleMap from "./components/map/google.map";
import Header from "./components/header/header";
import MarkerContainer from "./components/marker-container/marker-container";

class App extends Component {

    render() {
        return (
            <div className="">
                <Header/>
                <div className="content row p-5">
                    <div className='col-12 col-md-6 mb-4'>
                        <GoogleMap/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <MarkerContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
