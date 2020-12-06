import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store' 

const mockStore = configureMockStore([thunk])
const initialState = {
  location: {
    queryResults: [],
    loading: false
  },
  weather: {
    info: {}
  }
}

export {mockStore, initialState}
