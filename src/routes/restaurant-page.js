import React, {useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Restaurants from '../components/restaurants/restaurants'
import {selectFirstRestaurant} from '../store/selectors'
import {connect} from 'react-redux'
import {fetchRestaurants} from '../store/action-creators'

function RestaurantPage(props) {
  useEffect(() => {
    !props.firstRestaurant && props.fetchRestaurants()
  }, [props])

  if (props.match.isExact && props.firstRestaurant) {
    return <Redirect to={`/restaurant/${props.firstRestaurant.id}`} />
  }
  return (
    <Route
      path="/restaurant/:id"
      render={({match}) => <Restaurants restaurantId={match.params.id} />}
    />
  )
}

export default connect(
  state => ({
    firstRestaurant: selectFirstRestaurant(state),
  }),
  {
    fetchRestaurants,
  }
)(RestaurantPage)
