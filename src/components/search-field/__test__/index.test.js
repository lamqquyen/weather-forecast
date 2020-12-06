import React from "react";
import SearchField from "../index";
import TestRenderer from "react-test-renderer";
import {FormControl} from "react-bootstrap";

describe("SearchField", () => {
  it("renders correctly with loading is false", () => {
    const tree = TestRenderer.create(<SearchField />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with loading is true", () => {
    const tree = TestRenderer.create(<SearchField loading={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with focusing on form input", () => {
    const tree = TestRenderer.create(<SearchField value={'test'}/>).root;
    const {act} = TestRenderer

    const formControl = tree.findByType(FormControl);

    act(() => {
      formControl.props.onFocus()
    })

    const suggestionBlock = tree.findByProps({className: 'search-suggestion__wrapper'})

    expect(suggestionBlock).not.toBeNull()
  });
});
