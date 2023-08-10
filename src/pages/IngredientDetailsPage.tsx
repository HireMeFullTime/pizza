import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailsCard from '../components/DetailsCard';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import classes from './DetailsPage.module.css';

interface IngredientDetails {
  name: string;
  pizzas: { name: string }[];
  action: { name: string };
}
const IngredientDetailsPage = () => {
  const { ingredientName } = useParams();

  const [ingredientDetails, setIngredientDetails] =
    useState<IngredientDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchingredientDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/ingredient/get/${ingredientName}`,
        );
        const data = response.data;

        if (data) {
          setLoading(false);
          setIngredientDetails(data);
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
    fetchingredientDetails();
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : null}
      {loading ? <Spinner /> : null}

      {ingredientDetails && !loading && (
        <MainContentWrapper>
          <DetailsCard>
            <h1 className={classes.title}>{ingredientDetails?.name}</h1>
            <h2 className={classes['content-title']}>Pizzas:</h2>
            <ul className={classes['content-list']}>
              {ingredientDetails.pizzas.length > 0 ? (
                ingredientDetails.pizzas.map((ingredient) => (
                  <li key={ingredient.name}>🍕{ingredient.name}</li>
                ))
              ) : (
                <li>not found</li>
              )}
            </ul>
            <h2 className={classes['content-title']}>Action:</h2>
            <ul className={classes['content-list']}>
              {ingredientDetails.action &&
              ingredientDetails.action.name !== null ? (
                <li>👨🏿‍🍳{ingredientDetails?.action.name}</li>
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
export default IngredientDetailsPage;
