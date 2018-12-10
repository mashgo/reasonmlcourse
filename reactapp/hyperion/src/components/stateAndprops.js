import React, { Component } from 'react';
import '../styles/App.css';

class StateAndProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "React",
            lastName: "Developer"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <header className="App-header">
                <div className="container">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">First and last name</span>
                        </div>
                        <input onChange={this.handleChange} type="text" className="form-control" name="firstName" value={this.state.firstName} />
                        <input onChange={this.handleChange} type="text" className="form-control" name="lastName" value={this.state.lastName} />
                    </div>
                    <div className="input-group">
                        <p className="center">Welcome, {this.state.firstName + " " + this.state.lastName}</p>
                    </div>
                </div>
            </header>
        );
    }
}

export default StateAndProps;
