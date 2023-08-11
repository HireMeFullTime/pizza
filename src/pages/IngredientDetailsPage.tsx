import { useParams } from 'react-router-dom';

import DetailsCard from '../components/DetailsCard';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import classes from './DetailsPage.module.css';
import useGet from '../hooks/useGet';

interface IngredientDetails {
  name: string;
  pizzas: { name: string }[];
  action: { name: string };
}
const IngredientDetailsPage = () => {
  const { ingredientName } = useParams();

  const { getData, error, loading } = useGet<IngredientDetails>(
    `ingredient/get/${ingredientName}`,
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
            <h1 className={classes.title}>{getData?.name}</h1>
            <h2 className={classes['content-title']}>Pizzas:</h2>
            <ul className={classes['content-list']}>
              {getData.pizzas.length > 0 ? (
                getData.pizzas.map((ingredient) => (
                  <li key={ingredient.name}>🍕{ingredient.name}</li>
                ))
              ) : (
                <li>not found</li>
              )}
            </ul>
            <h2 className={classes['content-title']}>Action:</h2>
            <ul className={classes['content-list']}>
              {getData.action && getData.action.name !== null ? (
                <li>👨🏿‍🍳{getData?.action.name}</li>
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
