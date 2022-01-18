import '../css/Details.css';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const Details = () => {
  const detailsID = useParams().id;
  const { data: details, isLoading, error } = useFetch(endpoints.craftID+`${detailsID}`);

  console.log(details)

  const {
    id,
    url,
    name,
    serial_number,
    status, /* {id, name} */
    description,
    spacecraft_config,
    /*
      {
        id,
        url,
        name,
        type, {id, name}
        agency, {id, url, name, type, country_code, abbrev, description, administrator, founding_year, launchers, spacecraft, parent, image_url}
        in_use,
        capability,
        history,
        details,
        maiden_flight,
        height,
        diameter,
        human_rated,
        crew_capacity,
        payload_capacity,
        flight_life,
        image_url,
        nation_url,
        wiki_link,
        info_link
      }
    }
    */
    flights
  } = details;

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          {error ? <Error /> :
            <>
              <table>
                <th>{name}</th>
                <tr>
                  <td>ID:</td>
                  <td>{id}</td>
                  <td>SERIAL NUM:</td>
                  <td>{serial_number}</td>
                </tr>
                <tr>
                  <td>STATUS:</td>
                  <td>{status.name}</td>
                </tr>
                <tr>
                  <td colspan="4">{description}</td>
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
