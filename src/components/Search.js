import '../css/Search.css';
import { Fragment, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LaunchersContext } from '../contexts/LaunchersContext';
import { CraftContext } from '../contexts/CraftContext';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const type = useParams().type;
  const [query, setQuery] = useState('');
  const { searchCrafts } = useContext(CraftContext);
  const { searchLaunchers } = useContext(LaunchersContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
    type.includes('spacecraft') ? searchCrafts(e.target.value) : searchLaunchers(e.target.value);
  }

  return (
    <div className="search-container">
      <FaSearch className="icon-small" aria-hidden="true" />
      <input
        type="text"
        placeholder="search by name..."
        value={query}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}

export default Search;
