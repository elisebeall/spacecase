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
  const { spacecraft, setSpacecraft, setFilteredSpacecraft, filteredSpacecraft } = useContext(CraftContext);
  const { launchers, setLaunchers, filteredLaunchers, setFilteredLaunchers } = useContext(LaunchersContext);

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
    <>
      <Nav />
      {isLoading ? <Loading /> :
        <>
          {error ? <Error /> :
            <>
              <Boxes />
            </>
          }
        </>
      }
    </>
  )
}

export default Main;
