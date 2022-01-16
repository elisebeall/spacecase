import '../css/SingleBox.css';
import { Fragment } from 'react';

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
          <td>{description}</td>
        </tr>
      </table>
    </>
  )
}

export default SingleBox;
