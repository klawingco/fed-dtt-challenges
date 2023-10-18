'use client'
import useSWR from 'swr'
import { AdviceData } from './types/AdviceTypes'
import styles from './page.module.scss'
import Advice from './components/Advice'
import { adviceFetcher } from './utils/fetcher'
export default function Home() {
  // This should be on .env or secret but for sake of demo will be hardcoded here.
  const { data, isLoading, isValidating, mutate } = useSWR<AdviceData>(
    '/advice',
    adviceFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )
  return (
    <main className={styles.main}>
      <Advice
        isLoading={isLoading || isValidating}
        data={data}
        onGenerateAdvice={mutate}
      />
    </main>
  )
}
