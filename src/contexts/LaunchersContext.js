import { createContext, useState } from 'react';

export const LaunchersContext = createContext();

const LaunchersContextProvider = (props) => {
  const [launchers, setLaunchers] = useState([]);
  
  return (
    <LaunchersContext.Provider value={{launchers, setLaunchers}}>
      { props.children }
    </LaunchersContext.Provider>
  )
}

export default LaunchersContextProvider;
