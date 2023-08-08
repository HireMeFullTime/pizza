import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface pizzaName {
  name: string;
}
const HomePage = () => {
  const [pizzaData, setPizzaData] = useState<pizzaName[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPizzaName = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/pizza/get/all`,
        );
        const data = response.data.pizzas;

        if (data) {
          setPizzaData(data);
        } else {
          setError('Something went wrong. Please, try again later.');
        }
      } catch (error: any) {
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pizzaData &&
          !error &&
          pizzaData.map((pizza) => (
            <Link to={`/pizza/${pizza.name}`} key={pizza.name}>
              {pizza.name}
            </Link>
          ))}
      </div>
      {error ? <p>{error}</p> : null}
    </>
  );
};
export default HomePage;
