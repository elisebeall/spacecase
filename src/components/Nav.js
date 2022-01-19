import '../css/Nav.css';
import { Fragment } from 'react';
import Search from './Search';
import Button from './Button';

const Nav = () => {
  return (
    <nav className="nav-container">
      <Search />
      <Button />
    </nav>
  )
}

export default Nav;
