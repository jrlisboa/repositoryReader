import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { observer, inject } from 'mobx-react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

import './index.css';

@inject('git')
@observer
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isLoading: false,
    };
  }

  @autobind
  handleChange(e) {
    const username = e.target.value;
    this.setState({
      username,
    });
  }

  @autobind
  handleLoadRepositories(e) {
    e.preventDefault();
    const { fetchUserData } = this.props.git;
    const { username } = this.state;

    const onFetch = () => this.setState({ isLoading: false });

    this.setState({isLoading: true});
    fetchUserData(username, onFetch);
  }

  render() {
    const { isLoading } = this.state;
    const progress = (
      <LinearProgress
        className="Input__progress"/>
    );

    return (
      <div>
        <div className="Input">
          <FormControl
            className="Input-form">
            <TextField
              className="Input-form__text-field"
              id="username"
              label="Github Username"
              value={ this.state.username }
              onChange={ this.handleChange }
              disabled={ isLoading }
              margin="normal"/>
            <div className="Input-form__button">
              <Button
                type="submit"
                onClick={ this.handleLoadRepositories }
                variant="outlined"
                className="Input-form__submit">
                Go to repositories {this.props.git.userTest}
              </Button>
            </div>
          </FormControl>
        </div>
        { !isLoading || progress}
      </div>
    );
  }
}

export default Main;