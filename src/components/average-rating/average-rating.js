import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {selectAverageRating} from '../../store/selectors'
import {useSelector} from 'react-redux'

function AverageRating({reviews}) {
  const rating = useSelector(state => selectAverageRating(state, reviews), [
    reviews,
  ])

  return rating ? (
    <div>
      <Rate value={rating} disabled allowHalf />
    </div>
  ) : null
}

AverageRating.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default AverageRating
