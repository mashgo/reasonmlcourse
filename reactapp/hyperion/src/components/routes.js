import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

class FirstComponent extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} id="slidecaption" alt="logo" />
                    <h2>
                        Welcome to React JS
                    </h2>
                </header>
            </div>
        );
    }
}

export default FirstComponent;
