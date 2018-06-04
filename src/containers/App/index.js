import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Main from '../Main';
import Repositories from '../Repositories';
import GitStore from '../../stores/git';

const stores = {
  git: GitStore,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Provider {...stores}>
            <div>
              <Route exact path="/" component={Main}/>
              <Route exact path="/repositories" component={Repositories}/>
            </div>
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App;
