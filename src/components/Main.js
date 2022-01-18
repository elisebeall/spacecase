import '../css/Main.css';
import { Fragment, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CraftContext } from '../contexts/CraftContext';
import { LaunchersContext } from '../contexts/LaunchersContext';
import Nav from './Nav';
import Loading from './Loading';
import Error from './Error';
import Boxes from './Boxes';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const Main = () => {
  const type = useParams().type;
  const { setSpacecraft, filteredSpacecraft, setFilteredSpacecraft } = useContext(CraftContext);
  const { setLaunchers, filteredLaunchers, setFilteredLaunchers } = useContext(LaunchersContext);

  let url;
  type.includes('spacecraft') ? url = endpoints.spacecraft : url = endpoints.launchers;

  const { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    if (type.includes('spacecraft')) {
      setSpacecraft(data?.results);
      setFilteredSpacecraft(data?.results);
    } else {
      setLaunchers(data?.results);
      setFilteredLaunchers(data?.results);
    }
  }, [data])

  return (
    <div className="main-container">
      <Nav />
      {isLoading ? <Loading /> :
        <>
          {error ? <Error error={error}/> :
            <>
              <Boxes />
            </>
          }
        </>
      }
    </div>
  )
}

export default Main;
