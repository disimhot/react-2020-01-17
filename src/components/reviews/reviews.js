import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews} from '../../store/selectors'
import {fetchReviews} from '../../store/selectors'

class Reviews extends Component {
  componentDidMount() {
    this.props.fetchReviews && this.props.fetchReviews()
  }

  render() {
    const {reviews, id} = this.props
    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
          <ReviewForm id={id} />
        </Col>
      </Row>
    )
  }
}

export const ReviewsPropTypes = {
  id: PropTypes.string,
}

Review.propTypes = ReviewsPropTypes

//const mapStateToProps =

export default connect(
  (state, ownProps) => ({
    reviews: selectReviews(state, ownProps),
  }),
  {fetchReviews}
)(Reviews)
