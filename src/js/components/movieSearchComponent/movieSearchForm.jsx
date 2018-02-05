import React from 'react';

import { handleInput, onSearch } from './movieSearchActions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(onSearch(this.props.input));
  }

  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(handleInput(value));
  }

  render() {
    return (
      <form className='search-form'>
        <input
          name='movieTitle'
          placeholder='Enter a movie'
          onChange={ this.handleInput }
          value={ this.props.input }
          className='search-input'
        />
        <button
          type='submit'
          className='search-button'
          onClick={ this.onSearch }
        >
          Go!
        </button>
      </form>
    );
  }
}

export default SearchForm;
