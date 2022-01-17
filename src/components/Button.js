import '../css/Button.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GiSpaceShuttle } from 'react-icons/gi';

const Button = () => {
  return (
    <Link to="/spacecraft">
      <GiSpaceShuttle className="icon-large" />
    </Link>
  )
}

export default Button;
