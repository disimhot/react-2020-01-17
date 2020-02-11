import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews, selectReviewsLoaded} from '../../store/selectors'
import {fetchReviews} from '../../store/action-creators'

class Reviews extends Component {
  componentDidMount() {
    this.props.fetchReviews && this.props.fetchReviews()
  }

  render() {
    const {reviews, id, reviewsLoaded} = this.props

    return reviewsLoaded ? (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
          <ReviewForm id={id} />
        </Col>
      </Row>
    ) : (
      <h6>Loading reviews</h6>
    )
  }
}

export const ReviewsPropTypes = {
  id: PropTypes.string,
  reviews: PropTypes.object,
  reviewsLoaded: PropTypes.bool,
  fetchReviews: PropTypes.func,
}

Review.propTypes = ReviewsPropTypes

const mapStateToProps = (state, ownProps) => ({
  reviews: selectReviews(state, ownProps),
  reviewsLoaded: selectReviewsLoaded(state),
})

const mapDispatchToProps = {
  fetchReviews,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
