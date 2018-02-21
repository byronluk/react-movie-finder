import React from 'react';
import PropTypes from 'prop-types';

const MovieSearchForm = ({ onSubmit }) => {
  let input;

  return (
    <form
      className='search-form'
      onSubmit={ (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        onSubmit(input.value);
        input.value = '';
      } }
    >
      <input
        name='movieTitle'
        placeholder='Enter a movie'
        className='search-input'
        ref={ (node) => {
          input = node;
        } }
      />
      <button
        type='submit'
        className='search-button'
      >
        Go!
      </button>
    </form>
  );
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default MovieSearchForm;
