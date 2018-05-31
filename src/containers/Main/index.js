import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Logo from './folder.svg';
import Typography from '@material-ui/core/Typography';
import './index.css';

import Input from '../../components/Input';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Typography>
          <div className="Main-presentation">
              <div className="Main-presentation__image">
                <img src={Logo}/>
              </div>
              <h1 className="Main-presentation__title">
                Repositories
              </h1>
          </div>

          <div className="Main-presentation__subtitle">
            Type one username to see the repositories
          </div>

          <Input />
        </Typography>
      </div>
    );
  }
}

export default Main;
