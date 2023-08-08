import { useParams } from 'react-router-dom';

const IngredientDetailsPage = () => {
  const { ingredientId } = useParams();
  return <div>IngredientDetailsPage {ingredientId}</div>;
};
export default IngredientDetailsPage;
