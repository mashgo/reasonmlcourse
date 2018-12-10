import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Counter</h2>
                    <div>
                        <button className="btn btn-primary" onClick={this.decrement}>-</button>
                        <span>&nbsp;&nbsp;{this.props.count}&nbsp;&nbsp;</span>
                        <button className="btn btn-danger" onClick={this.increment}>+</button>
                    </div>
                </header>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);