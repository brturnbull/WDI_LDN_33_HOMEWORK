import React from 'react';

const SearchForm = ({ handleSubmit, newSearch, handleChange }) => {
  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Search"
        name='newSearch'
        onChange={handleChange}
      />
      <button>Search Gifs</button>
    </form>
  );
};

export default SearchForm;
