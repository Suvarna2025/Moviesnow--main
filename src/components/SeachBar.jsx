import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 w-full max-w-lg">
      <input
        type="text"
        placeholder="Search for movies..."
        className="border border-gray-600 text-white bg-gray-900 p-2 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-red-600"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
