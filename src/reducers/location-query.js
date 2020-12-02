import {ACTION_TYPES} from '../core/constants'

const initialState = {
  queryResults: []
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case ACTION_TYPES.QUERY_LOCATION:
      state.queryResults = [...payload]
      return state
    default:
      return state
  }

}
