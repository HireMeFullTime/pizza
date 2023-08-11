import { useParams } from 'react-router-dom';

import DetailsCard from '../components/DetailsCard';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import classes from './DetailsPage.module.css';
import useGet from '../hooks/useGet';

interface ActionDetails {
  name: string;
  pizzas: { name: string }[];
  ingredients: { name: string }[];
}
const ActionDetailsPage = () => {
  const { actionName } = useParams();

  const { getData, error, loading } = useGet<ActionDetails>(
    `action/get/${actionName}`,
    '',
    true,
  );
  return (
    <div>
      {error ? <Error content={error} /> : null}
      {loading ? <Spinner /> : null}

      {!loading && getData && (
        <MainContentWrapper>
          <DetailsCard>
            <h1 className={classes.title}>{getData?.name}</h1>

            <h2 className={classes['content-title']}>Pizzas:</h2>
            <ul className={classes['content-list']}>
              {getData.pizzas.length > 0 ? (
                getData.pizzas.map((action) => (
                  <li key={action.name}>🍕{action.name}</li>
                ))
              ) : (
                <li>not found</li>
              )}
            </ul>

            <h2 className={classes['content-title']}>Ingredients:</h2>
            <ul className={classes['content-list']}>
              {getData.ingredients.length > 0 ? (
                getData.ingredients.map((ingredient) => (
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
