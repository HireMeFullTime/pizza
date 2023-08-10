import { ReactNode } from 'react';

import classes from './DetailsCard.module.css';

const DetailsCard = ({ children }: { children: ReactNode }) => {
  return <div className={classes['details-card-wrapper']}>{children}</div>;
};
export default DetailsCard;
