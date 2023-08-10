import Quarter from '../assets/images/pizza_quarter.png';
import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <img
        src={Quarter}
        className={`${classes['pizza-part']} ${classes['pizza-part-1']}`}
        alt="pizza slice spinner"
      />
      <img
        src={Quarter}
        className={`${classes['pizza-part']} ${classes['pizza-part-2']}`}
        alt="pizza slice spinner"
      />
      <img
        src={Quarter}
        className={`${classes['pizza-part']} ${classes['pizza-part-3']}`}
        alt="pizza slice spinner"
      />
      <img
        src={Quarter}
        className={`${classes['pizza-part']} ${classes['pizza-part-4']}`}
        alt="pizza slice spinner"
      />
    </div>
  );
};
export default Spinner;
