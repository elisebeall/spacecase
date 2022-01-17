import '../css/Boxes.css';
import { Fragment, useContext } from 'react';
import { CraftContext } from '../contexts/CraftContext';
import SingleBox from './SingleBox';

const Boxes = () => {
  const { spacecraft } = useContext(CraftContext);

  return (
    <>
      {spacecraft.map(craft => <SingleBox craft={craft}/>)}
    </>
  )
}

export default Boxes;
