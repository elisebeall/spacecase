import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => {
  //       if(!response.ok) {
  //         throw new Error('💥 CRASH 💥.  Sorry, please try that again...');
  //       } return response.json();
  //     })
  //     .then(data => {
  //       setData(data);
  //       setError(null);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     })
  // }, [url])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error(`${response.status} : Cannot fetch the data.`)
      } else if (!response.ok) {
        throw new Error ('💥 CRASH 💥.  Sorry, please try that again...');
      }

      const data = await response.json();

      return data;
    }
    getData()
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, [url])

  return { data, isLoading, error };
}

export default useFetch;
