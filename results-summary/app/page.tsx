'use client'
import useSWR from 'swr'
import { ResultsSummaryData } from './types/ResultSummary'
import styles from './page.module.scss'
import ResultsRating from './components/ResultsRating'
import fetcher from './utils/fetcher'
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, isLoading } = useSWR<ResultsSummaryData[]>(
    'https://run.mocky.io/v3/f5205772-67f4-4f55-8574-1bcf9fe8f759',
    fetcher
  )
  return (
    <main className={styles.main}>
      <ResultsRating isLoading={isLoading} data={data} />
    </main>
  )
}
