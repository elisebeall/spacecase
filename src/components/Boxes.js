import '../css/Boxes.css';
import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CraftContext } from '../contexts/CraftContext';
import { LaunchersContext } from '../contexts/LaunchersContext';
import SingleBox from './SingleBox';

const Boxes = () => {
  const type = useParams().type;
  const { filteredSpacecraft } = useContext(CraftContext);
  const { filteredLaunchers } = useContext(LaunchersContext);

  console.log('filteredSpacecraft', filteredSpacecraft);

  return type.includes('spacecraft') ?
    (
      <>
        {filteredSpacecraft.map(craft => <SingleBox craft={craft} key={craft.id}/>)}
      </>
    ) : (
      <>
        {filteredLaunchers.map(craft => <SingleBox craft={craft} key={craft.id}/>)}
      </>
    )
}

export default Boxes;
