import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ActionName {
  name: string;
}

const ActionsPage = () => {
  const [actionData, setActionData] = useState<ActionName[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchActionName = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/action/get/all`,
        );
        const data = response.data.actions;

        if (data) {
          setLoading(false);
          setActionData(data);
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
    fetchActionName();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {actionData &&
          !error &&
          !loading &&
          actionData.map((action) => (
            <Link to={`/actions/${action.name}`} key={action.name}>
              {action.name}
            </Link>
          ))}
      </div>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}
    </>
  );
};
export default ActionsPage;
