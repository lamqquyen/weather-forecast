import store from "./store";
import {initialState} from '../__mock__/store'

describe('store', () => {
  it('store is matching initialState', () => {
    expect(store.getState()).toEqual(initialState)
  })
});
