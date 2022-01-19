import '../css/Launch.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GiSpaceShuttle } from 'react-icons/gi';
import { GiSpaceship } from 'react-icons/gi';
import { SiApacherocketmq as Rocket } from 'react-icons/si';

const Launch = () => {
  return (
    <>
      <h1>spacecase</h1>
      <div className="launch-link-container">
        <Link to="/spacecraft/spacecraft">
          <div className="spacecraft-launch-container">
            <GiSpaceShuttle className="icon-large" aria-label="go to spacecraft"/>
            <h2>view spacecraft</h2>
          </div>
        </Link>
        <Link to="/launchers/launchers">
          <div className="launchers-launch-container">
            <GiSpaceship className="icon-large" aria-label="go to launchers"/>
            <h2>view launchers</h2>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Launch;
