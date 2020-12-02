import {ACTION_TYPES} from '../core/constants'

const initialState = {
  info: {}
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case ACTION_TYPES.GET_WEATHER_INFORMATION:
      state.info = {...payload}
      return state
    default:
      return state
  }

}
