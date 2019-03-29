import React from 'react';

const UserCard = (props) => {

  if(!props.user) {
    return null;
  }

  return (
    <div>
      <div>
        Name: {props.user.name}
      </div>
      <div>
        Company: {props.user.company}
      </div>
      <div>
        Email: {props.user.email}
      </div>
      <div>
        Followers: {props.user.followers}
      </div>
      <div>
        Updated At: {props.user.updated_at}
      </div>
      <div>
        Avatar URL: <a href={props.user.avatar_url}>{props.user.avatar_url}</a>
      </div>
      <div>
        <button onClick={() => props.onLoadRepos(props.user.login)}>Load Repos</button>
      </div>
    </div>
  )
}

export default UserCard;