import React, { Component } from 'react';
import Logo from './folder.svg';
import './index.css';

import Input from '../../components/Input';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div>
          <div className="Main-presentation">
              <div className="Main-presentation__image">
                <img alt="Logo" src={Logo}/>
              </div>
              <h1 className="Main-presentation__title">
                Repositories
              </h1>
          </div>

          <div className="Main-presentation__subtitle">
            Type one username to see the repositories
          </div>

          <Input />
        </div>
      </div>
    );
  }
}

export default Main;
