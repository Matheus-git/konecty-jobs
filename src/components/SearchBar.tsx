import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="search-bar bg-purple p-2 rounded-md"
        placeholder="Pesquisar produtos..."
      />
    </div>
  );
};

export default SearchBar;
