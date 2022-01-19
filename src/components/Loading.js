import '../css/Loading.css';
import loading from '../assets/loading.gif';
import { Fragment } from 'react';

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loading} alt="loading gif" />
    </div>
  )
}

export default Loading;
