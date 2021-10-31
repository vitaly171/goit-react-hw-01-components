import PropTypes from "prop-types";
import styles from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({title, stats}) {
    return (
        <section className={styles.statistics}>
  {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
        {stats.map(e => {
          const backgroundColor = getRandomHexColor();
          const border = `${backgroundColor} 1px solid`;
          return (
            <li
              className={styles.item}
              style={{
                backgroundColor,
                border,
              }}
              key={e.id}
            >
              <span className={styles.label}>{e.label} </span>
              <span className={styles.percentage}>{e.percentage}%</span>
            </li>
          );
        })}
      </ul>
</section>
    )
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
