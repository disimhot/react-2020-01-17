import {ADD_REVIEW} from '../common'
import {addUser, addReview, updateRestaurant} from '../action-creators'

const generateRandomId = function uniqueID() {
  function chr4() {
    return Math.random()
      .toString(16)
      .slice(-4)
  }
  return (
    chr4() +
    chr4() +
    '-' +
    chr4() +
    '-' +
    chr4() +
    '-' +
    chr4() +
    '-' +
    chr4() +
    chr4()
  )
}

export const generatingID = store => next => action => {
  console.log('before', store.getState())

  if (action.type === ADD_REVIEW) {
    const {users} = store.getState()

    const {name} = action.payload
    const existInUsers = Object.values(users).some(user => user.name === name)
    const userId = existInUsers
      ? Object.values(users)
          .filter(user => user.name === name)
          .map(({id}) => id)
          .join('')
      : generateRandomId()

    const newPayload = {
      id: generateRandomId(),
      userId: userId,
      ...action.payload,
    }

    next(addUser(newPayload))
    next(addReview(newPayload))
    next(updateRestaurant(newPayload))
    console.log('after', store.getState())
  }
}
