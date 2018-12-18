import React, { Component } from 'react';
var timer = null;
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            canStart : false
        }
    }
    componentWillUpdate() {
        console.log("Component Will Update");
    }

    componentDidMount() {
        timer = setInterval(() => {
            if (typeof this.props.updateTime === "function") {
                this.props.updateTime();
            }
        }, 1000);
        console.log("Component Did Mount");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        clearInterval(timer);        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            time: nextProps.time
        });

        console.log("Component Will recieve Props");
    }

    componentDidUpdate() {
        console.log("Component did Update");
    }

    componentDidCatch() {
        console.log("Component did Catch");
    }

    componentWillMount() {

        console.log("Component Will Mount");
    }

    render() {
        return (<span> {this.state.time}</span>
        );
    }
}

export default Child;
