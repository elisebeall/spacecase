import '../css/Details.css';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import endpoints from '../enpoints.js';

const Details = () => {
  const { detailsID } = useParams().id;
  //const [ data: details, isLoading, error ] = useFetch();

  return (
    <>

      Details about a spacecraft/launch vechicle.
    </>
  )
}

export default Details;
