import React from 'react'
import Menu from './menu'
import Reviews from './reviews'
import Rating from './rating'

function Restaurant(props) {
  const averageRating = Math.round(
    props.restaurant.reviews.reduce(
      (accumulator, currentValue) => accumulator + currentValue.rating,
      0
    ) / props.restaurant.reviews.length
  )

  return (
    <div>
      Rest COMPs
      <Menu restaurant={props.restaurant} />
      <Rating rating={averageRating} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
}

export default Restaurant
