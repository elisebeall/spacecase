import '../css/Details.css';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import Button from './Button';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const Details = () => {
  const type = useParams().type;
  const detailsID = useParams().id;

  let url;
  type.includes('spacecraft') ?
    url = endpoints.craftID+`${detailsID}` :
    url = endpoints.launcherID+`${detailsID}`;

  const { data: details, isLoading, error } = useFetch(url);

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          {error ? <Error error={error} /> :
            <>
              {!type.includes('spacecraft') ? <h1>COMING SOON!</h1> :
                <div className="table-container">
                  <h1 className="details-name">{details?.name}</h1>
                  <table>
                    <tr>
                      <td className="details-label">agency :</td>
                      <td className="details-label2">{details?.spacecraft_config.agency.abbrev}</td>
                    </tr>
                    <tr>
                      <td className="details-label">serial num :</td>
                      <td className="details-label2">{details?.serial_number}</td>
                    </tr>
                    <tr>
                      <td className="details-label">status :</td>
                      <td className="details-label2">{details?.status.name}</td>
                    </tr>
                    <tr>
                      <td colSpan="4">{details?.description}</td>
                    </tr>
                    <tr>
                      <td>{details?.spacecraft_config.info_link}</td>
                    </tr>
                  </table>
                <Button />
                </div>
              }
            </>
          }
        </>
      }
    </>
  )
}

export default Details;
