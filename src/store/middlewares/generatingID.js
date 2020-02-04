import {ADD_REVIEW} from '../common'

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
          .map(user => user.id)
      : generateRandomId()

    const newPayload = {}
    newPayload.id = generateRandomId()
    newPayload.userId = userId

    next({
      ...action,
      payload: {
        ...action.payload,
        ...newPayload,
      },
    })
    console.log('after', store.getState())
  }
}
