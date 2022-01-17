import '../css/Boxes.css';
import { Fragment } from 'react';
import SingleBox from './SingleBox';

const Boxes = ({ spacecraft }) => {
  return (
    <>
      {spacecraft.map(craft => <SingleBox craft={craft}/>)}
    </>
  )
}

export default Boxes;
