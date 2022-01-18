import '../css/Main.css';
import { Fragment, useContext, useState } from 'react';
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
  const { spacecraft, setSpacecraft } = useContext(CraftContext);
  const { launchers, setLaunchers } = useContext(LaunchersContext);
  const [filteredCraft, setFilteredCraft] = useState(spacecraft);
  const [filteredLaunchers, setFilteredLaunchers] = useState(launchers);

  const type = useParams().type;

  let url;
  type.includes('spacecraft') ? url = endpoints.spacecraft : url = endpoints.launchers;

  const { data, isLoading, error } = useFetch(url);

  type.includes('spacecraft') ? setSpacecraft(data?.results) : setLaunchers(data?.results);

  console.log('spacecraft', spacecraft)
  console.log('launchers', launchers)

  const searchCrafts = (query) => {
    let filteringCrafts = filteredCraft.filter(craft => craft.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredCraft(filteringCrafts);
  }

  const searchLaunchers = (query) => {
    let filteringLaunchers = filteredLaunchers.filter(craft => craft.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredLaunchers(filteringLaunchers);
  }

  return (
    <>
      <Nav searchCrafts={searchCrafts} searchLaunchers={searchLaunchers}/>
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
