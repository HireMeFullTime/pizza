import { Outlet } from 'react-router-dom';

import Nav from './Nav';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Nav />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
