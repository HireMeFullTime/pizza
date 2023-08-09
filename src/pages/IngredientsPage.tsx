import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ingredientName {
  name: string;
}
const IngredientsPage = () => {
  const [ingredientData, setIngredientData] = useState<ingredientName[] | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchIngredientName = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/ingredient/get/all`,
        );
        const data = response.data.ingredients;
        console.log(data);

        if (data) {
          setLoading(false);
          setIngredientData(data);
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
    fetchIngredientName();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {ingredientData &&
          !error &&
          !loading &&
          ingredientData.map((ingredient) => (
            <Link to={`/ingredients/${ingredient.name}`} key={ingredient.name}>
              {ingredient.name}
            </Link>
          ))}
      </div>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}
    </>
  );
};
export default IngredientsPage;
