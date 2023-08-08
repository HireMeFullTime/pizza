import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ol>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/ingredients">Ingredients</NavLink>
      </li>
      <li>
        <NavLink to="/actions">Actions</NavLink>
      </li>
    </ol>
  );
};
export default Nav;
