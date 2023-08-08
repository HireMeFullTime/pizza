import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pizzaData &&
          !error &&
          !loading &&
          pizzaData.map((pizza) => (
            <Link to={`/pizza/${pizza.name}`} key={pizza.name}>
              {pizza.name}
            </Link>
          ))}
      </div>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}
    </>
  );
};
export default HomePage;
