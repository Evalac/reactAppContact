import { StatList } from './StatList/StatList';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title.length > 0 ? title : ''}</h2>
      <ul className={css.statList}>
        {stats.map(stat => (
          <StatList
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export { Statistic };
