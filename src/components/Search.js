import '../css/Search.css';
import { Fragment, useState, useContext } from 'react';
import { CraftContext } from '../contexts/CraftContext';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [query, setQuery] = useState('');
  const { spacecraft, setSpacecraft } = useContext(CraftContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpacecraft(query);
  }

  return (
    <form onSubmit={e => handleSubmit}>
      <FaSearch className="icon-small" aria-hidden="true" />
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  )
}

export default Search;
