import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>Enter user name: </label>
          <input 
            type="text"
            onChange={ e => this.setState({ term: e.target.value }) } 
            value={this.state.term}/>
        </div>
      </form>
    )
  }
}

export default SearchBar;