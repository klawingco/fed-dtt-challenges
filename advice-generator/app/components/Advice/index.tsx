import Image from 'next/image'
import ButtonIcon from '../../../public/icon-dice.svg'
import styles from './index.module.scss'
import Container from '@/components/Container'
import { AdviceProps } from '@/types/AdviceTypes'

const AdviceGenerator = ({
  isLoading,
  data,
  onGenerateAdvice,
}: AdviceProps) => (
  <Container>
    <div className={styles.adviceWrap}>
      {isLoading ? (
        <>
          <div className={styles.shimmerBG} role="alert" aria-busy="true"></div>
          <div className={styles.shimmerBG} role="alert" aria-busy="true"></div>
          <div className={styles.shimmerBG} role="alert" aria-busy="true"></div>
          <div className={styles.shimmerBG} role="alert" aria-busy="true"></div>
        </>
      ) : (
        <>
          <span className={styles.adviceHeader}>Advice #{data?.slip?.id}</span>
          <p className={styles.adviceBody}>
            <q>{data?.slip?.advice}</q>
          </p>
          <div className={styles.divider}></div>
          <button
            type="button"
            className={styles.generateAdvice}
            onClick={() => onGenerateAdvice()}
          >
            <Image src={ButtonIcon} priority alt="Generate Advice" />
          </button>
        </>
      )}
    </div>
  </Container>
)

export default AdviceGenerator
