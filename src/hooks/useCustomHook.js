import { useState, useEffect } from 'react';

const useCustomHook = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FETCH_DATA = async () => {
      try {
        const RESPONSE = await fetch(url);
        const DATA = await RESPONSE.json();
        setData(DATA);
      } catch (error) {
        setError(error);
      }
    };
    FETCH_DATA();
  }, [url]);

  return { data, error };
};

export default useCustomHook;