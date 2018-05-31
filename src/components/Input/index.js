import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import './index.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const username = e.target.value;
    this.setState({
      username,
    });
  }

  render() {
    return (
      <div className="Input">
        <FormControl className="Input-form">
          <TextField
            className="Input-form__text-field"
            id="username"
            label="Github Username"
            value={this.state.username}
            onChange={this.handleChange}
            margin="normal"
          />
          <div className="Input-form__button">
            <Button variant="outlined" className="Input-form__submmit">
              Go to repositories
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}

export default Main;