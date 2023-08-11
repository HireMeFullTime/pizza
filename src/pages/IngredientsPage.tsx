import Card from '../components/Card';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import useGet from '../hooks/useGet';

interface IngredientName {
  name: string;
}
const IngredientsPage = () => {
  const { getData, error, loading } = useGet<IngredientName[]>(
    'ingredient',
    'ingredients',
    false,
  );
  return (
    <>
      <MainContentWrapper>
        {getData &&
          !error &&
          !loading &&
          getData.map((ingredient) => (
            <Card
              href={`/ingredients/${ingredient.name}`}
              key={ingredient.name}
              name={ingredient.name}
            />
          ))}
      </MainContentWrapper>
      {error ? <Error content={error} /> : null}
      {loading ? <Spinner /> : null}
    </>
  );
};
export default IngredientsPage;
