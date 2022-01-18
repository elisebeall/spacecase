import { createContext, useState } from 'react';

export const LaunchersContext = createContext();

const LaunchersContextProvider = (props) => {
  const [launchers, setLaunchers] = useState([]);
  const [filteredLaunchers, setFilteredLaunchers] = useState([]);

  const searchLaunchers = (query) => {
    let filteringLaunchers = filteredLaunchers.filter(craft => {
      return craft.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredLaunchers(filteringLaunchers);
  }

  return (
    <LaunchersContext.Provider
      value={{launchers, setLaunchers, filteredLaunchers, setFilteredLaunchers, searchLaunchers}}>
        { props.children }
    </LaunchersContext.Provider>
  )
}

export default LaunchersContextProvider;
