import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src="../bus.png" />*/}
                    <h2>Support System for School Bus</h2>
                </div>
                <p className="App-intro">
                    {/*To get started, edit <code>src/App.js</code> and save to reload. */}
                </p>
                <div>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default App;
