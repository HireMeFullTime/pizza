import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.navbar}>
      <ol className={classes.navigation}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : `${classes.link}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ingredients"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : `${classes.link}`
            }
          >
            Ingredients
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actions"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : `${classes.link}`
            }
          >
            Actions
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};
export default Nav;
