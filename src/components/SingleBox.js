import '../css/SingleBox.css';
import { Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdBrokenImage } from 'react-icons/md';

const SingleBox = ({ craft }) => {
  const type = useParams().type;

  if (!craft.image_url) {
    craft.image_url = '../assets/placeholder.png';
  }

  return type.includes('spacecraft') ?
    (
      <div className="craft-image-container">
        <Link to={`/details/${type}/${craft.id}`}>
          <img className="craft-image" src={craft.spacecraft_config?.image_url} alt={craft.name} />
          <h2 className="craft-image-text">{craft.name}</h2>
        </Link>
      </div>
    ) : (
      <div className="craft-image-container">
        <Link to={`/details/${type}/${craft.id}`}>
          <img className="craft-image" src={craft.image_url} alt={craft.launcher_config?.name} />
          <h2 className="craft-image-text">{craft.launcher_config?.name}</h2>
        </Link>
      </div>
    )
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
