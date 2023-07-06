import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, bad, neutral, total, positive }) => {
  return (
    <div>
      <ul className={css.statistics__list}>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>
            Good:<span className={css.statistic__span}>{good}</span>
          </p>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>
            Neutral:<span className={css.statistic__span}>{neutral}</span>
          </p>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>
            Bad:<span className={css.statistic__span}>{bad}</span>
          </p>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>
            Total:<span className={css.statistic__span}>{total}</span>
          </p>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>
            Positive feedback:
            <span className={css.statistic__span}>{positive}%</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
