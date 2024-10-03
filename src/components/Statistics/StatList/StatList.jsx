import css from '../Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomColorForStatList';

function StatList({ label, percentage }) {
  const backgroundColor = getRandomHexColor();
  return (
    <li className={css.item} style={{ backgroundColor }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}

export { StatList };

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
