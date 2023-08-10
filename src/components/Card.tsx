import { Link } from 'react-router-dom';

const Card = ({
  href,
  key,
  name,
}: {
  href: string;
  key: string;
  name: string;
}) => {
  return (
    <Link to={href} key={key} style={{ height: 'fit-content' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          // border: '1px solid white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          background: 'white',
          color: 'black',
          fontSize: '24px',
        }}
      >
        {name}
      </div>
    </Link>
  );
};
export default Card;
