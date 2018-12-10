import React, { Component } from 'react';
import '../styles/App.css';
import FirstComponent from "./firstComponent";
import Counter from "./counter";
import StateAndProps from "./stateAndprops";
import Parent from "./parent";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "first"
        }
        this.clickedMe = this.clickedMe.bind(this);
    }

    clickedMe(e) {
        this.setState({
            current: e.target.id
        })
    }

    render() {
        return (
            <div className="menu">
                <Router>
                    <div>
                        <ul>
                            <li><Link className={this.state.current === "first" ? "active" : ""} to="/"><span id="first" onClick={this.clickedMe}>First Component</span></Link></li>
                            <li><Link className={this.state.current === "second" ? "active" : ""} to="/state"><span id="second" onClick={this.clickedMe}>State & Props</span></Link></li>
                            <li><Link className={this.state.current === "third" ? "active" : ""} to="/lifecycle"><span id="third" onClick={this.clickedMe}>Component Life Cycle</span></Link></li>
                            <li><Link className={this.state.current === "fourth" ? "active" : ""} to="/actions"><span id="fourth" onClick={this.clickedMe}>Actions & Reducers</span></Link></li>
                            <li><Link className={this.state.current === "fifth" ? "active" : ""} to="/routes"><span id="fifth" onClick={this.clickedMe}>Routing Mechanism</span></Link></li>
                        </ul>
                        <Route exact path="/" component={FirstComponent} />
                        <Route path="/state" component={StateAndProps} />
                        <Route path="/lifecycle" component={Parent} />
                        <Route path="/actions" component={Counter} />
                        <Route path="/routes" render={() => <div className="App">
                            <header className="App-header">
                                <h2>React Routing</h2>
                            </header>
                        </div>
                        } />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Menu;
