import { Link, useLocation } from 'react-router-dom';

import classes from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');

  const crumbs = breadcrumbs.map((crumb, index, array) => {
    let currentLink = '';

    for (let i = 0; i <= index; i++) {
      currentLink += `/${array[i]}`;
    }

    return (
      <div className="crumb" key={crumb}>
        <Link to={currentLink} className={classes.link}>
          {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
        </Link>
        {index < array.length - 1 && (
          <span className={classes['breadcrumb-separator']}>{'>'}</span>
        )}
      </div>
    );
  });

  const isHomeVisible = breadcrumbs.length > 0;
  return (
    <div className={classes.breadcrumbs}>
      {isHomeVisible && (
        <div className="crumb" key="home">
          <Link to="/" className={`${classes.link} ${classes.home}`}>
            Pizza
          </Link>
          {crumbs.length > 0 && (
            <span className={classes['breadcrumb-separator']}>{'>'}</span>
          )}
        </div>
      )}
      {crumbs}
    </div>
  );
}
