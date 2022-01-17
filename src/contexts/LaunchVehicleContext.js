import { createContext, useState } from 'react';

export const LaunchVehicleContext = createContext();

const LaunchVehicleContextProvider = (props) => {
  const [launchVehicles, setLaunchVehicles] = useState([]);

  return (
    <LaunchVehicleContext.Provider value={launchVehicles, setLaunchVehicles}>
      { props.children }
    </LaunchVehicleContext.Provider>
  )
}

export default LaunchVehicleContextProvider;
