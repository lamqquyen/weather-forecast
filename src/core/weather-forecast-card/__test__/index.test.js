import React from 'react'
import WeatherForecastCard from '../index'
import {Provider} from 'react-redux'
import TestRenderer from 'react-test-renderer';
import {mockStore, initialState} from '../../../../__mock__/store'
import SearchField from "../../../components/search-field";

describe("WeatherForecastCard", () => {
  const store = mockStore(initialState)

  it('renders correctly', () => {

    const tree = TestRenderer.create(
      <Provider store={store}>
        <WeatherForecastCard />
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot();
  })

  it('type value', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <WeatherForecastCard />
      </Provider>
    ).root

    const {act} = TestRenderer
    const searchInput = tree.findByType(SearchField)

    act(() => {
      const e = {target: {value: 'test'}}
      searchInput.props.onChange(e)
    })

    expect(searchInput.props.value).toEqual('test')
  })
})