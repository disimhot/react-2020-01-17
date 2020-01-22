import React from 'react'

function Reviews(props) {
  const content = props.reviews.map(review => (
    <div key={review.id}>
      <h3>Пользователь {review.user}</h3>
      <p>{review.text}</p>
    </div>
  ))

  return <div>{content}</div>
}

export default Reviews
