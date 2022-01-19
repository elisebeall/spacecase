import '../css/Launch.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GiSpaceShuttle } from 'react-icons/gi';
import { SiApacherocketmq as Rocket } from 'react-icons/si';

const Launch = () => {
  return (
    <>
      <h1>spacecase</h1>
      <div className="launch-link-container">
        <Link to="/spacecraft/spacecraft">
          <GiSpaceShuttle className="icon-large" aria-label="go to spacecraft"/>
        </Link>
        <Link to="/launchers/launchers">
          <Rocket className="icon-large" aria-label="go to launchers"/>
        </Link>
      </div>
    </>
  )
}

export default Launch;
