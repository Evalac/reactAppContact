import { StatList } from './StatList/StatList';

function Statistic({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className={title}>Upload stats</h2>
      <ul className="stat-list">
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

export { Statistic };
