import React from 'react'
import Review from './review'
import {Col, Row} from 'antd'

function Reviews({reviews}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review
            className={'TEST'}
            data-automation-id="REVIEW_ITEM"
            review={review}
            key={review.id}
          />
        ))}
      </Col>
    </Row>
  )
}

export default Reviews
