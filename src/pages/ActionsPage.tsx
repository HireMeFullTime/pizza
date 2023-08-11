import Card from '../components/Card';
import Error from '../components/Error';
import MainContentWrapper from '../components/layout/MainContentWrapper';
import Spinner from '../components/Spinner';
import useGet from '../hooks/useGet';

interface ActionName {
  name: string;
}

const ActionsPage = () => {
  const { getData, error, loading } = useGet<ActionName[]>(
    'action',
    'actions',
    false,
  );

  return (
    <>
      <MainContentWrapper>
        {getData &&
          !error &&
          !loading &&
          getData.map((action) => (
            <Card
              href={`/actions/${action.name}`}
              key={action.name}
              name={action.name}
            />
          ))}
      </MainContentWrapper>
      {error ? <Error content={error} /> : null}
      {loading ? <Spinner /> : null}
    </>
  );
};
export default ActionsPage;
