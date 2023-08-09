import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface PizzaDetails {
  name: string;
  ingredients: { name: string }[];
  actions: { name: string }[];
}
const PizzaDetailsPage = () => {
  const { pizzaName } = useParams();

  const [pizzaDetails, setPizzaDetails] = useState<PizzaDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchPizzaDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/pizza/get/${pizzaName}`,
        );
        const data = response.data;

        if (data) {
          setLoading(false);
          setPizzaDetails(data);
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
    fetchPizzaDetails();
  }, []);
  return (
    <div>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}

      {pizzaDetails && !loading && (
        <>
          <h2>{pizzaDetails?.name}</h2>
          <p>Ingredients:</p>
          <ul>
            {pizzaDetails.ingredients.length > 0 ? (
              pizzaDetails.ingredients.map((pizza) => (
                <li key={pizza.name}>{pizza.name}</li>
              ))
            ) : (
              <li>not found</li>
            )}
          </ul>
          <p>Actions:</p>
          <ul>
            {pizzaDetails.actions.length > 0 ? (
              pizzaDetails.actions.map((pizza) => (
                <li key={pizza.name}>{pizza.name}</li>
              ))
            ) : (
              <li>not found</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};
export default PizzaDetailsPage;
