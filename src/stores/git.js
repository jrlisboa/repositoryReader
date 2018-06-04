import {observable, action, runInAction} from 'mobx';
import fetch from 'isomorphic-fetch';

const API = 'https://api.github.com';

class GitStore {
  @observable user;
  @observable repos;

  @action resetUserData() {
    this.user = {
      data: [],
      loading: true,
      error: undefined,
    };
  }

  @action async fetchUserData(userName) {
    const headers = {
      'content-type': 'application/json',
      'Accept': 'application/vnd.github.full+json'
    };

    const response = await fetch(`${API}/users/${userName}`, {headers});
    const payload = await response.json();

    runInAction('fetchUserData', () => {
      if (response.status === 200) {
        return this.user = {
          loading: false,
          data: payload,
          error: undefined,
        };
      }

      this.user = {
        loading: false,
        data: [],
        error: payload.message,
      };
    });
  }

  @action async fetchUserRepos(userName, sort) {
    const headers = {
      'content-type': 'application/json',
      'Accept': 'application/vnd.github.full+json'
    };

    const query = sort ? `?sort=${sort}` : '';
    const response = await fetch(`${API}/users/${userName}/repos${query}`, {headers});
    const payload = await response.json();

    runInAction('fetchUserData', () => {
      if (response.status === 200) {
        return this.repos = {
          loading: false,
          data: payload,
          error: undefined,
        };
      }

      this.repos = {
        loading: false,
        data: [],
        error: payload.message,
      };
    });
  }

  @action fetchUser(userName) {
    this.fetchUserData(userName);
    this.fetchUserRepos(userName);
  }
}

export default new GitStore();