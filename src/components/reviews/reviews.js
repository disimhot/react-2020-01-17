import React from 'react'
import PropTypes from 'prop-types'
import Review, {ReviewProps} from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'

function Reviews({reviews = []}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review
            data-automation-id="REVIEW_ITEM"
            review={review}
            key={review.id}
          />
        ))}
        <ReviewForm id={''} />
      </Col>
    </Row>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewProps)).isRequired,
}

export default Reviews
