import {FAIL, START, SUCCESS} from '../common'

export default store => next => action => {
  const {callAPI, ...rest} = action

  if (!callAPI) {
    return next(rest)
  }

  next({
    ...rest,
    type: action.type + START,
  })
  fetch(callAPI)
    .then(res => res.json())
    .then(res =>
      next({
        ...rest,
        type: action.type + SUCCESS,
        response: res,
      })
    )
    .catch(e => {
      next({
        ...rest,
        type: action.type + FAIL,
        error: e,
      })
    })
}
