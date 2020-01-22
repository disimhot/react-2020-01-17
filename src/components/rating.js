import React from 'react'
import {Rate} from 'antd'

function Rating(props) {
  return (
    <div>
      <h4>Средний рейтинг</h4>
      <Rate count={starsAmount} value={props.rating} disabled />
    </div>
  )
}

export default Rating

const starsAmount = 5
