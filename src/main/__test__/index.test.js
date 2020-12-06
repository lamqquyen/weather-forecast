import React from "react";
import Main from "../index";
import {Provider} from "react-redux";
import TestRenderer from "react-test-renderer";
import {mockStore, initialState} from "../../../__mock__/store";

describe("Main", () => {
  it("renders correctly", () => {
    const store = mockStore(initialState);

    const tree = TestRenderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
