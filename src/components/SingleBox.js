import '../css/SingleBox.css';
import { Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleBox = ({ craft }) => {
  const type = useParams().type;

  return type.includes('spacecraft') ?
    (
      <Link to={`/details/${type}/${craft.id}`}>
        <img src={craft.spacecraft_config.image_url} alt={craft.name} />
      </Link>
    ) : (
      <Link to={`/details/${type}/${craft.id}`}>
        <img src={craft.image_url} alt={craft.launcher_config.name} />
      </Link>
    );
}

export default SingleBox;
