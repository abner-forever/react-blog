import React, { Component } from 'react';
import Page from './page'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './store'
let store = createStore(todoApp)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}

export default App;
