import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      HomePage
      <Link to={`/pizza/${5}`}>Pizza 5</Link>
      <Link to={`/pizza/${6}`}>Pizza 6</Link>
    </div>
  );
};
export default HomePage;
