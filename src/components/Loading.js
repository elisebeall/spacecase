import '../css/Loading.css';
import loading from '../assets/loading3.gif';
import { Fragment } from 'react';

const Loading = () => {
  return (
    <div className="loading-container">
      <img className="loading-gif" src={loading} alt="loading gif" />
    </div>
  )
}

export default Loading;
