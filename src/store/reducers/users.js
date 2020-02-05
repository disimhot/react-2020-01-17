import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const {userId, name} = action.payload
      return {
        ...usersState,
        [userId]: {
          ...usersState[userId],
          id: userId,
          name: name,
        },
      }
    }
    default: {
      return usersState
    }
  }
}
