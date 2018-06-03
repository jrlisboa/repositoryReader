import {observable, action, runInAction} from 'mobx';
import fetch from 'isomorphic-fetch';

const API = 'https://api.github.com';

export default class GitStore {
  @observable user;

  @action resetUserData() {
    this.user = {
        data: [],
        loading: true,
        error: undefined,
    };
  }

  @action async fetchUserData(userName) {
    this.resetUserData();

    const headers = {
      'content-type': 'application/json',
      'Accept': 'application/vnd.github.full+json'
    };

    const response = await fetch(`${API}/users/${userName}/repos`, {headers});

    console.log(response);
  }
}