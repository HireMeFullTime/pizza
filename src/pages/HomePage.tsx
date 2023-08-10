import axios from 'axios';
import { useEffect, useState } from 'react';

import Card from '../components/Card';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';

interface PizzaName {
  name: string;
}
const HomePage = () => {
  const [pizzaData, setPizzaData] = useState<PizzaName[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchPizzaName = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/pizza/get/all`,
        );
        const data = response.data.pizzas;

        if (data) {
          setLoading(false);
          setPizzaData(data);
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
    fetchPizzaName();
  }, []);

  return (
    <>
      <MainContentWrapper>
        {pizzaData &&
          !error &&
          !loading &&
          pizzaData.map((pizza) => (
            <Card href={`/${pizza.name}`} key={pizza.name} name={pizza.name} />
          ))}
      </MainContentWrapper>

      {error ? <Error content={error} /> : null}
      {loading ? <Spinner /> : null}
    </>
  );
};
export default HomePage;
