import '../css/Button.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GiSpaceShuttle } from 'react-icons/gi';

const Button = () => {
  return (
    <Link to="/spacecrafts">
      <img src={GiSpaceShuttle} alt="go to spacecrafts" />
    </Link>
  )
}

export default Button;
