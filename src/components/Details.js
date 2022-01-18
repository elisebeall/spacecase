import '../css/Details.css';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const Details = () => {
  const type = useParams().type;
  const detailsID = useParams().id;

  let url;
  type.includes('spacecraft') ? url = endpoints.craftID+`${detailsID}` : url = endpoints.launcherID+`${detailsID}`;

  const { data: details, isLoading, error } = useFetch(url);

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          {error ? <Error /> :
            <>
              <table>
                <th>{details?.name}</th>
                <tr>
                  <td>ID:</td>
                  <td>{details?.id}</td>
                  <td>SERIAL NUM:</td>
                  <td>{details?.serial_number}</td>
                </tr>
                <tr>
                  <td>STATUS:</td>
                  <td>{details?.status.name}</td>
                </tr>
                <tr>
                  <td colspan="4">{details?.description}</td>
                </tr>
              </table>
            </>
          }
        </>
      }
    </>
  )
}

export default Details;
