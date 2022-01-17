import '../css/SingleBox.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SingleBox = ({ craft }) => {
  const {
    id,
    url,
    name,
    serial_number,
    status, /* {id, name} */
    description,
    spacecraft_config
    /*
      {
        id,
        url,
        name,
        type, {id, name}
        agency, {id, url, name, type}
        in_use,
        image_url
      }
    }
    */
  } = craft;

  return (
    <>
      <img src={spacecraft_config.image_url} alt={spacecraft_config.name} />
      <Link to={`/details/${id}`}>more details</Link>
    </>
  )
}

export default SingleBox;
