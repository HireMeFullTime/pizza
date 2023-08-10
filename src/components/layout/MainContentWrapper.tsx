import { ReactNode } from 'react';

const MainContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      // style={{ display: 'flex', flexDirection: 'column' }}
      style={{
        // outline: '1px solid yellow',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
        maxWidth: '700px',
        outline: '1px solid white',
        height: 'fit-content',
      }}
    >
      {children}
    </div>
  );
};
export default MainContentWrapper;
