import styles from './index.module.scss'
const ResultsCard = ({ scoreAverage = 0 }: { scoreAverage: number }) => (
  <div className={styles.resultsCard}>
    <h2>Your Results</h2>
    <div className={styles.resultsRate}>
      <div>{scoreAverage}</div>
      <span>of 100</span>
    </div>
    <div className={styles.resultsMsg}>
      <h3>Great</h3>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  </div>
)

export default ResultsCard
