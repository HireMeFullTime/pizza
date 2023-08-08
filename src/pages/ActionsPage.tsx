import { Link } from 'react-router-dom';

const ActionsPage = () => {
  return (
    <div>
      ActionsPage
      <Link to={`/actions/${5}`}>action 5</Link>
      <Link to={`/actions/${6}`}>action 6</Link>
    </div>
  );
};
export default ActionsPage;
