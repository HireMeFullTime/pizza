import { ReactNode } from 'react';

import classes from './MainContentWrapper.module.css';

const MainContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={classes['main-content-wrapper']}>{children}</div>;
};
export default MainContentWrapper;
