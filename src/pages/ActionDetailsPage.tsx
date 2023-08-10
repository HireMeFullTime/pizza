import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailsCard from '../components/DetailsCard';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import classes from './DetailsPage.module.css';

interface ActionDetails {
  name: string;
  pizzas: { name: string }[];
  ingredients: { name: string }[];
}
const ActionDetailsPage = () => {
  const { actionName } = useParams();

  const [actionDetails, setActionDetails] = useState<ActionDetails | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchActionDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/action/get/${actionName}`,
        );
        const data = response.data;

        if (data) {
          setLoading(false);
          setActionDetails(data);
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
    fetchActionDetails();
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : null}
      {loading ? <Spinner /> : null}

      {!loading && actionDetails && (
        <MainContentWrapper>
          <DetailsCard>
            <h1 className={classes.title}>{actionDetails?.name}</h1>

            <h2 className={classes['content-title']}>Pizzas:</h2>
            <ul className={classes['content-list']}>
              {actionDetails.pizzas.length > 0 ? (
                actionDetails.pizzas.map((action) => (
                  <li key={action.name}>🍕{action.name}</li>
                ))
              ) : (
                <li>not found</li>
              )}
            </ul>

            <h2 className={classes['content-title']}>Ingredients:</h2>
            <ul className={classes['content-list']}>
              {actionDetails.ingredients.length > 0 ? (
                actionDetails.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>➕{ingredient.name}</li>
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
export default ActionDetailsPage;
