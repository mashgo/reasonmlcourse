import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from './actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.props.userActions.incrementValue();
    }

    decrement() {
        this.props.userActions.decrementValue();
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

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);