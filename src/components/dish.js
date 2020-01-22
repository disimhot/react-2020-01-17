import React from 'react'
import {Button} from 'antd'
import {useAmount} from '../custom-hooks/use-amount'

function Dish(props) {
  const {amount, decrease, increase} = useAmount()
  return (
    <div>
      <p>{props.dish.name}</p>
      <p>{props.dish.price}</p>
      <div>
        {amount}
        <Button onClick={decrease} type="primary">
          -
        </Button>
        <Button onClick={increase} type="primary">
          +
        </Button>
      </div>
    </div>
  )
}

export default Dish
