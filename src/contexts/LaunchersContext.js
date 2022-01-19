import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LaunchersContext = createContext();

const LaunchersContextProvider = (props) => {
  const [launchers, setLaunchers] = useState([]);
  const [filteredLaunchers, setFilteredLaunchers] = useState([]);

  const searchLaunchers = (query) => {
    console.log('query', query)
    let filteringLaunchers = launchers.filter(craft => {
      return craft.launcher_config?.name.toLowerCase().includes(query.toLowerCase());
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

LaunchersContextProvider.propTypes = {
  context: PropTypes.shape({
    launchers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      launcher_config: PropTypes.shape({
        name: PropTypes.string
      }),
      image_url: PropTypes.string
    })),
    setLaunchers: PropTypes.func,
    filteredLaunchers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      launcher_config: PropTypes.shape({
        name: PropTypes.string
      }),
      image_url: PropTypes.string
    })),
    setFilteredLaunchers: PropTypes.func,
    searchLaunchers: PropTypes.func
  })
}
