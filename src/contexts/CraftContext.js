import { createContext, useState } from 'react';

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
