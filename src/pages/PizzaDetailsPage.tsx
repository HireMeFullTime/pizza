import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailsCard from '../components/DetailsCard';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import classes from './DetailsPage.module.css';

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
      {error ? <Error content={error} /> : null}
      {loading ? <Spinner /> : null}

      {pizzaDetails && !loading && (
        <MainContentWrapper>
          <DetailsCard>
            <h1 className={classes.title}>{pizzaDetails?.name}</h1>
            <h2 className={classes['content-title']}>Ingredients:</h2>
            <ul className={classes['content-list']}>
              {pizzaDetails.ingredients.length > 0 ? (
                pizzaDetails.ingredients.map((pizza) => (
                  <li key={pizza.name}>➕{pizza.name}</li>
                ))
              ) : (
                <li>not found</li>
              )}
            </ul>
            <h2 className={classes['content-title']}>Actions:</h2>
            <ul className={classes['content-list']}>
              {pizzaDetails.actions.length > 0 ? (
                pizzaDetails.actions.map((pizza) => (
                  <li key={pizza.name}>👨🏿‍🍳{pizza.name}</li>
                ))
              ) : (
                <li>not found</li>
              )}
            </ul>
          </DetailsCard>
        </MainContentWrapper>
      )}
    </div>
  );
};
export default PizzaDetailsPage;
