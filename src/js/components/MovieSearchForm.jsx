import React from 'react';

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

export default MovieSearchForm;
