import React from "react";
import SearchSuggestion from "../index";
import TestRenderer from "react-test-renderer";
import WeatherBlock from '../index'
import {weatherPayload} from '../../../../__mock__/payload'

describe("WeatherBlock", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<WeatherBlock info={weatherPayload}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
