import styles from './page.module.scss'
import CardRating from './components/CardRating/index'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardRating />
    </main>
  )
}
