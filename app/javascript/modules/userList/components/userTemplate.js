import React, { Component } from 'react';
import { Link } from 'react-router';

const gitHubURL = "https://www.github.com/";
const repoTabParam = "?tab=repositories";

export default class UserTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  repoURL(userName) {
    return gitHubURL.concat(userName, repoTabParam);
  }

  gitUserURL(userName) {
    return gitHubURL.concat(userName);
  }

  render() {
    let user = this.props.user;
    return (
      <tr>
        <td>{user && user.id}</td>
        <td><a href={this.gitUserURL(user && user.login)} target="_blank" className="repoUrl">{user && user.login}</a></td>
        <td><a href={this.gitUserURL(user && user.login)} target="_blank" className="repoUrl"><img src={user && user.avatar_url} alt="..." className="avatar" /></a></td>
        <td><a href={this.repoURL(user && user.login)} target="_blank" data-repo={user && user.repos_url} className="repoUrl">{user && user.repos_url}</a></td>
      </tr>
    );
  }
}
