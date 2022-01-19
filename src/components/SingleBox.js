import '../css/SingleBox.css';
import { Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

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

SingleBox.propTypes = {
  craft: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    spacecraft_config: PropTypes.shape({
      image_url: PropTypes.string
    }),
    launcher_config: PropTypes.shape({
      name: PropTypes.string
    }),
    image_url: PropTypes.string
  })
}
