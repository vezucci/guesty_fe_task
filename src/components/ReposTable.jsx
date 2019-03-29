import React from 'react';
import ReposTableRow from './ReposTableRow';
import _ from 'lodash';

class ReposTable extends React.Component {
  state = {
    orderByField: 'name'
  }

  headerColumns = [
    { title: 'Name', value: 'name' },
    { title: 'Description', value: 'description' },
    { title: 'URL', value: 'url' },
    { title: 'Forks Count', value: 'forks_count' },
    { title: 'Watchers Count', value: 'watchers_count' }
  ];

  setOrderByField = (fieled) => {
    this.setState({ orderByField: fieled });
  }

  render() {

    const { repos } = this.props;

    return (
      <table className="ui basic table">
        <thead>
          <tr>
            {this.headerColumns.map(column => {
              return <th key={column.title} onClick={() => this.setOrderByField(column.value)}>{column.title}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {_.orderBy(repos, this.state.orderByField).map(repo => {
            return <ReposTableRow key={repo.id} repo={repo} />
          })}
        </tbody>
      </table>
    )
  }

}

export default ReposTable;