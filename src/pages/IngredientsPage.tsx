import { Link } from 'react-router-dom';

const IngredientsPage = () => {
  return (
    <div>
      IngredientsPage
      <Link to={`/ingredients/${5}`}>ingredient 5</Link>
      <Link to={`/ingredients/${6}`}>ingredient 6</Link>
    </div>
  );
};
export default IngredientsPage;
