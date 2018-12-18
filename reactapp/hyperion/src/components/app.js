import React, { Component } from 'react';
import '../styles/App.css';
import Menu from "./menu";
import { Provider } from 'react-redux';
import { store } from "./store"

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
