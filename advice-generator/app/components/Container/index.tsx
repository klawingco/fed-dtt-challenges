import { ReactNode } from 'react'
import styles from './index.module.scss'

const Container = ({ children, ...props }: { children: ReactNode }) => (
  <section {...props} className={styles.container}>
    {children}
  </section>
)

export default Container
