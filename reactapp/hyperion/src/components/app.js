import React, { Component } from 'react';
import '../styles/App.css';
import Menu from "./menu";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
         <Menu />
        </Provider>
      </div>
    );
  }
}

export default App;
