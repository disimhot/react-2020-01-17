import React, {useMemo} from 'react'
import Menu from './menu'
import Reviews from './reviews'
import Rating from './rating'

function Restaurant(props) {
  const memoRating = useMemo(() => {
    return Math.round(
      props.restaurant.reviews.reduce(
        (accumulator, currentValue) => accumulator + currentValue.rating,
        0
      ) / props.restaurant.reviews.length
    )
  }, [props.restaurant.reviews])

  return (
    <div>
      Rest COMPs
      <Menu restaurant={props.restaurant} />
      <Rating rating={memoRating} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
}

export default Restaurant
