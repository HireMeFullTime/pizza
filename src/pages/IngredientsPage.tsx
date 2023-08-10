import axios from 'axios';
import { useEffect, useState } from 'react';

import Card from '../components/Card';
import MainContentWrapper from '../components/layout/MainContentWrapper';

interface IngredientName {
  name: string;
}
const IngredientsPage = () => {
  const [ingredientData, setIngredientData] = useState<IngredientName[] | null>(
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
      <MainContentWrapper>
        {ingredientData &&
          !error &&
          !loading &&
          ingredientData.map((ingredient) => (
            <Card
              href={`/ingredients/${ingredient.name}`}
              key={ingredient.name}
              name={ingredient.name}
            />
          ))}
      </MainContentWrapper>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}
    </>
  );
};
export default IngredientsPage;
