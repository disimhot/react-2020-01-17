import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import cx from 'classnames'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'

import styles from './review-form.module.css'

const ReviewForm = ({id}) => {
  const dispatch = useDispatch()
  const handleSubmit = event => {
    event.preventDefault()
    //event.persist()
    console.log('Submit', event)
    dispatch(addReview(formData))
  }

  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  })

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const {name, review, rating} = formData

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Your name"
              className={cx(styles.inputName)}
              name="name"
              value={name}
              onChange={event => updateFormData(event)}
              required
            />
            <Input.TextArea
              rows={3}
              name="review"
              value={review}
              onChange={event => updateFormData(event)}
              size="large"
              required
            />
            <div>
              Rating: <Rate name="rating" value={0} rating={rating} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
