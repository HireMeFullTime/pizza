import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      {loading ? <p>Loading...</p> : null}

      {ingredientDetails && !loading && (
        <>
          <h2>{ingredientDetails?.name}</h2>
          <p>Pizzas:</p>
          <ul>
            {ingredientDetails.pizzas.length > 0 ? (
              ingredientDetails.pizzas.map((ingredient) => (
                <li key={ingredient.name}>{ingredient.name}</li>
              ))
            ) : (
              <li>not found</li>
            )}
          </ul>
          <p>Action:</p>
          <ul>
            {ingredientDetails.action &&
            ingredientDetails.action.name !== null ? (
              <li>{ingredientDetails?.action.name}</li>
            ) : (
              <li>not found</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};
export default IngredientDetailsPage;
