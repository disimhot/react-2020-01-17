import React, {Component} from 'react'
import Leaflet from 'leaflet'
import './restaurant-map.css'
import {connect} from 'react-redux'
import {
  selectRestaurantsLoading,
  selectRestaurantsLoaded,
  selectRestaurants,
} from '../../store/selectors'
import {fetchRestaurants} from '../../store/action-creators'

class RestaurantsMap extends Component {
  markers = []

  render() {
    return <div ref={this.divRef} className="map" />
  }

  divRef = React.createRef()

  refCallback = ref => {
    this.div = ref
  }

  componentDidMount() {
    if (!this.props.isRestaurantLoading && !this.props.isRestaurantLoaded) {
      this.props.fetchRestaurants()
    }
    this.map = Leaflet.map(this.divRef.current, {
      center: [51.51847684708113, -0.13999606534701844],
      zoom: 12,
    })
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map)
    this.renderTiles()
  }
  componentDidUpdate() {
    this.renderTiles()
  }
  renderTiles = () => {
    this.markers.forEach(marker => marker.remove())
    this.markers = []
    this.markers = this.props.restaurants
      .filter(restaurant =>
        this.props.id ? restaurant.id === this.props.id : restaurant
      )
      .map(({location: {lat, lng}}) =>
        Leaflet.marker([lat, lng]).addTo(this.map)
      )
  }
}

export default connect(
  state => ({
    restaurants: selectRestaurants(state),
    isRestaurantLoading: selectRestaurantsLoading(state),
    isRestaurantLoaded: selectRestaurantsLoaded(state),
  }),
  {
    fetchRestaurants,
  }
)(RestaurantsMap)
