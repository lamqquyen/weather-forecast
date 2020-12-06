import {ACTION_TYPES} from '../core/constants'

const initialState = {
  info: {}
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.GET_WEATHER_INFORMATION:
      state = {...state, info: payload}
      break

    default:
      break
  }

  return state
}

export default reducer
