/* eslint-disable react/no-multi-comp */
import { SetStateAction, Dispatch } from 'react'
import styles from './index.module.scss'

const RatingButtonSet = (props: {
  rating: number
  setRating: Dispatch<SetStateAction<number>>
}) => (
  <div className={styles.ratingBtnSet}>
    {[...new Array(5)].map((_v, i) => {
      const currentValue = (i as number) + 1
      return (
        <RatingButton
          key={`rating_btn${i}`}
          value={currentValue}
          onClick={() => props.setRating(currentValue)}
          isSelected={props.rating == currentValue}
        />
      )
    })}
  </div>
)

const RatingButton = (props: {
  isSelected: boolean
  value: string | number
  onClick: () => void
}) => (
  <button
    className={`${styles.ratingBtn} ${
      props.isSelected ? styles.ratingBtnSelected : ''
    }`}
    {...props}
  >
    {props.value}
  </button>
)

export default RatingButtonSet
