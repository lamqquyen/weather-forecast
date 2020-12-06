import React from "react";
import SearchSuggestion from "../index";
import TestRenderer from "react-test-renderer";

describe("SearchSuggestion", () => {
  it("renders correctly with loading is false", () => {
    const tree = TestRenderer.create(<SearchSuggestion loading={false}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with loading is true", () => {
    const tree = TestRenderer.create(<SearchSuggestion loading={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
