import React, {useCallback, useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import Restaurant, {RestaurantProps} from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)

  const restaurant = useMemo(() => {
    return props.restaurants.find(restaurant => restaurant.id === currentId)
  }, [currentId, props.restaurants])

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape(RestaurantProps.restaurant)),
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
})

export default connect(mapStateToProps)(Restaurants)
