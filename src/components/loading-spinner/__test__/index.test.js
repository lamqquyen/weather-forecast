import React from 'react'
import LoadingSpinner from '../index'
import TestRenderer from 'react-test-renderer';

describe("LoadingSpinner", () => {
  it('renders correctly with loading is true', () => {
    const tree = TestRenderer.create(
      <LoadingSpinner loading={true}/>
    ).toJSON()

    expect(tree).toMatchSnapshot();
  })


  it('renders correctly with loading is false', () => {
    const tree = TestRenderer.create(
      <LoadingSpinner loading={false}/>
    ).toJSON()

    expect(tree).toBeNull();
  })
})