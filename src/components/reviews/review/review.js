import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import {selectReview, selectUsers} from '../../../store/selectors'
import {useSelector} from 'react-redux'

function Review(props) {
  const selectReviewMemo = useCallback(state => selectReview(state, props), [
    props,
  ])
  const review = useSelector(selectReviewMemo)
  const {name} = useSelector(state => selectUsers(state)[review.userId])
  return (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title
            data-automation-id="REVIEW_USER"
            className={styles.name}
            level={4}
          >
            {name}
          </Typography.Title>
          <Typography.Text
            data-automation-id="REVIEW_TEXT"
            className={styles.comment}
          >
            {review.text}
          </Typography.Text>
        </Col>
        <Col xs={8} md={6} align="right" className={styles.rateColumn}>
          <Rate disabled value={review.rating} />
        </Col>
      </Row>
    </Card>
  )
}

export const ReviewProps = {
  id: PropTypes.string.isRequired,
  review: PropTypes.shape({
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number,
  }),
}

Review.propTypes = ReviewProps

export default Review
