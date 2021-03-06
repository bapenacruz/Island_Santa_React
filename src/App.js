import React, { Component } from 'react';
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
                
        );
    }
}

export default App;
