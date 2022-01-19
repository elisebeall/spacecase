import '../css/Error.css';
import { Fragment } from 'react';
import Button from './Button';

const Error = ({ error }) => {
  return (
    <div className="error-container">
      <h2>{error}. Please try again.</h2>
      <Button />
    </div>
  )
}

export default Error;
