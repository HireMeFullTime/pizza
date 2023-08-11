import axios from 'axios';
import { useEffect, useState } from 'react';

const useGet = <T>(path: string, dataName: string, details: boolean) => {
  const [getData, setGetData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDataName = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          details
            ? `${process.env.REACT_APP_BACKEND_URL}/${path}`
            : `${process.env.REACT_APP_BACKEND_URL}/${path}/get/all`,
        );
        const data = details ? response.data : response.data[dataName];

        if (data) {
          setLoading(false);
          setGetData(data);
        } else {
          setLoading(false);
          setError('Something went wrong. Please, try again later.');
        }
      } catch (error: any) {
        setLoading(false);
        setError(
          error.response?.data.message ||
            'Something went wrong. Please, try again later.',
        );
      }
    };
    fetchDataName();
  }, []);

  return { getData, error, loading };
};
export default useGet;
