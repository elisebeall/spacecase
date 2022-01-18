import '../css/NotFound404.css';
import { Fragment } from 'react';
import Button from './Button';

const NotFound404 = () => {
  return (
    <div className="not-found-container">
      <h2>Whoa, you made a wrong turn. Please try again.</h2>
      <Button />
    </div>
  )
}

export default NotFound404;
