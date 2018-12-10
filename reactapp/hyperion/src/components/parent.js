import React, { Component } from 'react';
import Child from "./child";

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }

        this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount() {
        (function () {
            var logger = document.getElementById('log');
            console.log = function () {
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] == 'object') {
                        logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
                    } else {
                        logger.innerHTML += arguments[i] + '<br />';
                    }
                }
            }
        })();
    }

    updateTime() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>
                        Current Time is  {new Date().toDateString()}
                        <Child time={this.state.time} updateTime={this.updateTime} />
                    </h2>
                    <pre id="log" className="log"></pre>
                </header>
            </div>
        );
    }
}

export default Parent;
