import Card from '../components/Card';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import useGet from '../hooks/useGet';

interface PizzaName {
  name: string;
}
const HomePage = () => {
  const { getData, error, loading } = useGet<PizzaName[]>(
    'pizza',
    'pizzas',
    false,
  );

  return (
    <>
      <MainContentWrapper>
        {getData &&
          !error &&
          !loading &&
          getData.map((pizza) => (
            <Card href={`/${pizza.name}`} key={pizza.name} name={pizza.name} />
          ))}
      </MainContentWrapper>

      {error ? <Error content={error} /> : null}
      {loading ? <Spinner /> : null}
    </>
  );
};
export default HomePage;
