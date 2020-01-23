import React from 'react'
import Menu from './menu'
import Reviews from './reviews'
import Rating from './rating'

function Restaurant(props) {
  return (
    <div>
      <Menu restaurant={props.restaurant} />
      <Rating reviews={props.restaurant.reviews} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
}

export default Restaurant
