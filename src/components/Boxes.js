import '../css/Boxes.css';
import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CraftContext } from '../contexts/CraftContext';
import { LaunchersContext } from '../contexts/LaunchersContext';
import SingleBox from './SingleBox';

const Boxes = () => {
  const type = useParams().type;
  const { filteredSpacecraft } = useContext(CraftContext);
  const { filteredLaunchers } = useContext(LaunchersContext);

  const filteredBoxes = () => {
    return type.includes('spacecraft') ?
      (
        <>
          {!filteredSpacecraft.length ? <h2>No results matched your search.</h2> :
            <>
              {filteredSpacecraft.map(craft => {
                return <SingleBox craft={craft} key={craft.id}/>
              })}
            </>
          }
        </>
      ) : (
        <>
          {!filteredSpacecraft.length ? <h2>No results matched your search.</h2> :
            <>
              {filteredLaunchers.map(craft => {
                return <SingleBox craft={craft} key={craft.id}/>
              })}
            </>
          }
        </>
      )
  }

  return (
    <>
      {filteredBoxes()}
    </>
  )
}

export default Boxes;
