import React, { Component } from 'react';
import Main from '../Main';

import TestStore

const stores = {

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={..stores}>
          <Main/>
        </Provider>
      </div>
    );
  }
}

export default App;
