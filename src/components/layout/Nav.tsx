import { NavLink } from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs';
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
            Pizza
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

      <Breadcrumbs />
    </nav>
  );
};
export default Nav;
