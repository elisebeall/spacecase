import '../css/Error.css';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return (
    <>
      <h3>{error}</h3>
    </>
  )
}

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired
}
