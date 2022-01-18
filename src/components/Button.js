import '../css/Button.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MdHome as Home } from 'react-icons/md';

const Button = () => {
  return (
    <Link to="/">
      <Home className="icon-small" aria-label="home button" />
    </Link>
  )
}

export default Button;
