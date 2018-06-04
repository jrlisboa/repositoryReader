import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import './index.css';

import RepoHeader from '../../components/RepoHeader';
import Repos from '../../components/Repos';

@inject('git')
@observer
class Repositories extends Component {
  render() {
    const { user, repos } = this.props.git;

    if (!user || !repos) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Repositories">
        <RepoHeader />
        <Repos />
      </div>
    );
  }
}

export default Repositories;