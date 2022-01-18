import '../css/Main.css';
import { Fragment, useContext } from 'react';
import { CraftContext } from '../contexts/CraftContext';
import Nav from './Nav';
import Loading from './Loading';
import Error from './Error';
import Boxes from './Boxes';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const Main = () => {
  const { data, isLoading, error } = useFetch(endpoints.spacecraft);
  const {spacecraft, setSpacecraft} = useContext(CraftContext);

  setSpacecraft(data?.results);
  console.log(spacecraft)

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
