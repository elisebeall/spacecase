import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CraftContext = createContext();

const CraftContextProvider = (props) => {
  const [spacecraft, setSpacecraft] = useState([]);
  const [filteredSpacecraft, setFilteredSpacecraft] = useState([]);

  const searchCrafts = (query) => {
    let filteringCrafts = spacecraft.filter(craft => {
      return craft.name.toLowerCase().includes(query.toLowerCase());
    });
    console.log('filteringCrafts', filteringCrafts)
    setFilteredSpacecraft(filteringCrafts);
  }

  return (
    <CraftContext.Provider
      value={{spacecraft, setSpacecraft, filteredSpacecraft, setFilteredSpacecraft, searchCrafts}}>
        { props.children }
    </CraftContext.Provider>
  )
}

export default CraftContextProvider;

CraftContextProvider.propTypes = {
  context: PropTypes.shape({
    spacecraft: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      spacecraft_config: PropTypes.shape({
        image_url: PropTypes.string
      })
    })),
    setSpacecraft: PropTypes.func,
    filteredSpacecraft: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      spacecraft_config: PropTypes.shape({
        image_url: PropTypes.string
      })
    })),
    setFilteredSpacecraft: PropTypes.func,
    searchCrafts: PropTypes.func
  })
}
