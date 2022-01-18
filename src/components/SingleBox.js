import '../css/SingleBox.css';
import { Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleBox = ({ craft }) => {
  const type = useParams().type;

  return type.includes('launchers') ?
    (
      <div className="craft-image-container">
        <Link to={`/details/${type}/${craft.id}`}>
          <img className="craft-image" src={craft.spacecraft_config.image_url} alt={craft.name} />
          <h2 className="craft-image-text">{craft.name}</h2>
        </Link>
      </div>
    ) : (
      <div className="craft-image-container">
        <Link to={`/details/${type}/${craft.id}`}>
          <img className="craft-image" src={craft.image_url} alt={craft.launcher_config.name} />
          <h2 className="craft-image-text">{craft.launcher_config.name}</h2>
        </Link>
      </div>
    )
}

export default SingleBox;
