import { useParams } from 'react-router-dom';

const PizzaDetailsPage = () => {
  const { pizzaId } = useParams();
  return <div>PizzaDetailsPage {pizzaId}</div>;
};
export default PizzaDetailsPage;
