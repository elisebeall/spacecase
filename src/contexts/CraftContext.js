import { createContext, useState } from 'react';
//import useFetch from '../hooks/useFetch';

export const CraftContext = createContext();

const CraftContextProvider = (props) => {
  const [spacecraft, setSpacecraft] = useState([]);

  return (
    <CraftContext.Provider value={spacecraft, setSpacecraft}>
      { props.children }
    </CraftContext.Provider>
  )
}

export default CraftContextProvider;
