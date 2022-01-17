import '../css/Loading.css';
import loading from '../assets/loading.gif';
import { Fragment } from 'react';

const Loading = () => {
  return (
    <>
      <img src={loading} alt='loading gif' />
    </>
  )
}

export default Loading;
