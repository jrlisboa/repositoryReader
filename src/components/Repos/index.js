import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import autobind from 'autobind-decorator';

import Card from '@material-ui/core/Card';

import './index.css';

@inject('git')
@observer
class Repos extends Component {
  @autobind
  handleSort(sort) {
    const { git } = this.props;

    git.fetchUserRepos(git.user.login, sort);
  }
  render() {
    const { data } = this.props.git.repos;

    return (
      <div className="Repos">
        <div className="Repos-sorts">
          <div
            className="Repos-sorts__by-name"
            onClick={() => this.handleSort('full_name')}>
            Sort by [Name]
          </div>
          <div
            className="Repos-sorts__by-created"
            onClick={() => this.handleSort('created')}>
            Sort by [Created]
          </div>
          <div
            className="Repos-sorts__by-created"
            onClick={() => this.handleSort('updated')}>
            Sort by [Updated]
          </div>
        </div>
        {
          data.map(row => (
            <Card className="Repo-card">
              <div className="Repo-card__data-left">
                <div className="full-name">{row.full_name}</div>
                <div className="clone-url">Clone: {row.clone_url}</div>
              </div>

              <div className="Repo-card__data-right">
                <div className="stars">Stars: {row.watchers}</div>
                <div className="forks">Forks: {row.forks}</div>
              </div>
            </Card>
          ))
        }
      </div>
    );
  }
}

export default Repos;