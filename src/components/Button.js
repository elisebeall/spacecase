import '../css/Button.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MdHome as Home } from 'react-icons/md';

const Button = () => {
  return (
    <Link to="/">
      <div className="home-btn-container">
        <Home className="home-btn" aria-label="home button" />
        <h2 className="home-btn-text">go back to launch</h2>
      </div>
    </Link>
  )
}

export default Button;
