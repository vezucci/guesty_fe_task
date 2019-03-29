import React from 'react';

const ReposTableRow = (props) => {
  const { repo } = props;

  return (
    <tr>
      <td>{repo.name}</td>
      <td>{repo.description}</td>
      <td>{repo.url}</td>
      <td>{repo.forks_count}</td>
      <td>{repo.watchers_count}</td>
    </tr>
  )
}

export default ReposTableRow;