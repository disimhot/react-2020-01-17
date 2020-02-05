import React from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'

function Reviews({reviews, id}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(reviewId => (
          <Review
            data-automation-id="REVIEW_ITEM"
            id={reviewId}
            key={reviewId}
          />
        ))}
        <ReviewForm id={id} />
      </Col>
    </Row>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default Reviews
