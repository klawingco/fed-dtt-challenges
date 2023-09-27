import Image from 'next/image'
import styles from './index.module.scss'
import { ResultsSummaryData } from '@/types/ResultSummary'

const ResultsSummary = ({
  isLoading,
  resultsList,
}: {
  isLoading: boolean
  resultsList: ResultsSummaryData[] | undefined
}) => (
  <div className={styles.resultsSummary}>
    <h2>Summary</h2>
    <ul className={styles.summaryList}>
      {isLoading && (
        <>
          <div className={styles.shimmerBG} role="alert" aria-busy="true">
            Loader
          </div>
          <div className={styles.shimmerBG} role="alert" aria-busy="true">
            Loader
          </div>
          <div className={styles.shimmerBG} role="alert" aria-busy="true">
            Loader
          </div>
          <div className={styles.shimmerBG} role="alert" aria-busy="true">
            Loader
          </div>
        </>
      )}

      {resultsList?.map((result, index) => (
        <li className={iconStyle(result.category)} key={`list_${index}`}>
          <span>
            <Image
              src={`/${result.icon}`}
              priority={true}
              aria-hidden
              alt={result.category}
              height={18}
              width={18}
            />
            {result.category}
          </span>
          <span>
            {result.score} <span>/ 100</span>
          </span>
        </li>
      ))}
    </ul>
    {!isLoading && <button type="submit">Continue</button>}
  </div>
)

const iconStyle = (category: string) => {
  switch (category) {
    case 'Reaction':
      return styles.summaryItemRed
    case 'Memory':
      return styles.summaryItemOrangeyellow
    case 'Verbal':
      return styles.summaryItemGreenTeal
    case 'Visual':
      return styles.summaryItemCobaltBlue
    default:
      return styles.summaryItemRed
  }
}

export default ResultsSummary
