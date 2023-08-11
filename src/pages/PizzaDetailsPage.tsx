import { useParams } from 'react-router-dom';

import DetailsCard from '../components/DetailsCard';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import classes from './DetailsPage.module.css';
import useGet from '../hooks/useGet';

interface PizzaDetails {
  name: string;
  ingredients: { name: string }[];
  actions: { name: string }[];
}

const PizzaDetailsPage = () => {
  const { pizzaName } = useParams();

  const { getData, error, loading } = useGet<PizzaDetails>(
    `pizza/get/${pizzaName}`,
    '',
    true,
  );

  return (
    <div>
      {error ? <Error content={error} /> : null}
      {loading ? <Spinner /> : null}

      {getData && !loading && (
        <MainContentWrapper>
          <DetailsCard>
            <h1 className={classes.title}>{getData.name}</h1>
            <h2 className={classes['content-title']}>Ingredients:</h2>
            <ul className={classes['content-list']}>
              {getData.ingredients.length > 0 ? (
                getData.ingredients.map((ingredient: { name: string }) => (
                  <li key={ingredient.name}>➕{ingredient.name}</li>
                ))
              ) : (
                <li>not found</li>
              )}
            </ul>
            <h2 className={classes['content-title']}>Actions:</h2>
            <ul className={classes['content-list']}>
              {getData.actions.length > 0 ? (
                getData.actions.map((action: { name: string }) => (
                  <li key={action.name}>👨🏿‍🍳{action.name}</li>
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
