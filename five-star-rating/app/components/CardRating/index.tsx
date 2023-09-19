'use client'
import { useState } from 'react'
import Image from 'next/image'

import ThankYouIllustration from '../../../public/illustration-thank-you.svg'
import styles from './index.module.scss'
import RatingButtonSet from './RatingButtonSet'

const CardRating = () => {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      className={`${styles.cardRating} ${
        submitted ? styles.cardRatingSubmitted : ''
      }`}
    >
      {!submitted ? (
        <>
          <div className={styles.starLogo}>★</div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </>
      ) : (
        <>
          <div className={styles.thankYouIllus}>
            <Image src={ThankYouIllustration} alt={'Thank you Illustration'} />
          </div>
          <span className={styles.selectedMsg}>
            You selected {rating} out of 5
          </span>
          <h1 className={styles.fullCenter}>Thank you!</h1>
          <p className={styles.fullCenter}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </>
      )}

      {submitted == false && (
        <>
          <RatingButtonSet setRating={setRating} rating={rating} />
          <button
            className={styles.submitBtn}
            onClick={() => {
              if (rating > 0) {
                setSubmitted(true)
              }
            }}
          >
            Submit
          </button>
        </>
      )}
    </section>
  )
}

export default CardRating
