import { useEffect, useState, useCallback } from 'react';
import fetchDataFromApi from '../utils/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  const makeApiCall = useCallback(async () => {
    try {
      const res = await fetchDataFromApi(endpoint);
      setData(res);
    } catch (error) {
      throw new Error('Problem fetching data', error);
    }
  }, [endpoint]);

  useEffect(() => {
    makeApiCall();
  }, [endpoint, makeApiCall]);

  return { data };
};
export default useFetch;
