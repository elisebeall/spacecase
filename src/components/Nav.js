import '../css/Nav.css';
import { Fragment } from 'react';
import Search from './Search';
import Button from './Button';

const Nav = ({ searchCrafts, searchLaunchers }) => {
  return (
    <>
      <Search searchCrafts={searchCrafts} searchLaunchers={searchLaunchers} />
      <Button />
    </>
  )
}

export default Nav;
