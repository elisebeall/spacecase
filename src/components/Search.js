import '../css/Search.css';
import { Fragment, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [query, setQuery] = useState('');
  
  return (
    <>
      <FaSearch />
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={setQuery}
      />
    </>
  )
}

export default Search;
