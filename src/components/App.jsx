import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, loadRepos } from '../actions';

import SearchBar from './SearchBar';
import UserCard from './UserCard';
import ReposTable from './ReposTable';


class App extends React.Component {

  onSearchSubmit = (userName) => {
    this.props.searchUsers(userName);
  }

  onLoadReposClick = (userName) => {
    this.props.loadRepos(userName);
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        <UserCard user={this.props.user} onLoadRepos={this.onLoadReposClick}/>
        <br />
        {this.props.repos.length > 0 ? <ReposTable repos={this.props.repos}/> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    repos: state.repos
  }
}

export default connect(
  mapStateToProps,
  { searchUsers, loadRepos }
)(App);