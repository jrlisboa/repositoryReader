import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './index.css';

@inject('git')
@observer
class RepoHeader extends Component {
  render() {
    const { data } = this.props.git.user;

    return (
      <div className="User">
        <div className="User__image">
          <img alt="user" src={data.avatar_url}/>
        </div>
        <div className="User__info">
          <h2>{data.name}</h2>
          <h4>{data.bio}</h4>
          <h6>Public Repositories: {data.public_repos}</h6>
        </div>
      </div>
    );
  }
}

export default RepoHeader;