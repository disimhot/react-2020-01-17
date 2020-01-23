import React, {useMemo} from 'react'
import {Rate} from 'antd'

function Rating(props) {
  const memoRating = useMemo(() => {
    return Math.round(
      props.reviews.reduce(
        (accumulator, currentValue) => accumulator + currentValue.rating,
        0
      ) / props.reviews.length
    )
  }, [props.reviews])

  return (
    <div>
      <h4>Средний рейтинг</h4>
      <Rate count={starsAmount} value={memoRating} disabled />
    </div>
  )
}

export default Rating

const starsAmount = 5
