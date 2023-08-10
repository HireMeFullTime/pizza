import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link to={href} className={classes['card-link']}>
      <div className={classes['card-link__content']}>{name}</div>
    </Link>
  );
};
export default Card;
