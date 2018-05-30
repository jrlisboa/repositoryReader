import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './index.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Typography>
          <div className="Main-title">
              Repositories
          </div>
        </Typography>
      </div>
    );
  }
}

export default Main;
