import React, {useEffect} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect, useDispatch} from 'react-redux'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../../store/selectors'
import {fetchRestaurants, validateRestaurant} from '../../store/action-creators'
import Loader from '../loader'

function Restaurants({
  restaurantId,
  restaurants,
  restaurantsLoading,
  restaurantsLoaded,
  fetchRestaurants,
}) {
  const dispatch = useDispatch()
  useEffect(() => {
    !restaurantsLoading && !restaurantsLoaded && fetchRestaurants()
  }, [fetchRestaurants, restaurantsLoading, restaurantsLoaded])

  useEffect(() => {
    dispatch(validateRestaurant(restaurantId))
  }, [restaurantsLoaded, restaurantId])

  if (restaurantsLoading) {
    return <Loader />
  }

  const restaurant = restaurants.find(
    restaurant => restaurant.id === restaurantId
  )

  return (
    <div data-automation-id="RESTAURANTS">
      <RestaurantsNavigation restaurants={restaurants} />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state),
  restaurantsLoading: selectRestaurantsLoading(state),
  restaurantsLoaded: selectRestaurantsLoaded(state),
})

const mapDispatchToProps = {
  fetchRestaurants,
  validateRestaurant,
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
