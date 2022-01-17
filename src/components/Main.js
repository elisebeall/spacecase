import '../css/Main.css';
import { Fragment } from 'react';
import Nav from './Nav';
import Loading from './Loading';
import Error from './Error';
import Boxes from './Boxes';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const Main = () => {
  const { data: spacecraft, isLoading, error } = useFetch(endpoints.spacecraft);
  //const { data: launchVehicles, isLoading, error } = useFetch();

  console.log(spacecraft);

  return (
    <>
      <Nav />
      {isLoading ? <Loading /> :
        <>
          {error ? <Error /> :
            <>
              <Boxes spacecraft={spacecraft} />
            </>
          }
        </>
      }
    </>
  )
}

export default Main;
