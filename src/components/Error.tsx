import classes from './Error.module.css';

const Error = ({ content }: { content: string }) => {
  return <div className={classes.error}>{content}</div>;
};
export default Error;
