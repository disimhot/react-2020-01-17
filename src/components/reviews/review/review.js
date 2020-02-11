import React, {useEffect} from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {
  selectUser,
  selectUsersMap,
  selectUsersLoaded,
} from '../../../store/selectors'
import {fetchUsers} from '../../../store/action-creators'
import {connect} from 'react-redux'

function Review(props) {
  const {review, user, usersLoaded, fetchUsers} = props

  useEffect(() => {
    fetchUsers && fetchUsers()
  }, [])

  return usersLoaded ? (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={16} align="left">
          <Typography.Title className={styles.name} level={4}>
            {user.name}
          </Typography.Title>
          <Typography.Text className={styles.comment}>
            {review.text}
          </Typography.Text>
        </Col>
        <Col xs={8} md={8} align="right" className={styles.rateColumn}>
          <Rate disabled value={review.rating} />
        </Col>
      </Row>
    </Card>
  ) : (
    <h5>Loading users</h5>
  )
}

export const ReviewPropTypes = {
  userId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

Review.propTypes = {
  review: PropTypes.shape(ReviewPropTypes),
  users: PropTypes.object,
  usersLoaded: PropTypes.bool,
  user: PropTypes.object,
  fetchUsers: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(state, {id: ownProps.review.userId}),
  users: selectUsersMap(state),
  usersLoaded: selectUsersLoaded(state),
})

const mapDispatchToProps = {
  fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
