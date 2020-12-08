import React, {useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {InputGroup, FormControl} from 'react-bootstrap'
import './style.css';
import {noop} from 'lodash'
import SearchSuggestion from '../search-suggestion'

const SearchField = (props) => {
  const {className, value, onChange, onSelect, queryResults, loading} = props;
  const [locations, setLocations] = useState([]);
  const [isFocus, setFocus] = useState(false);
  const suggestionRef = useRef(null);

  const _onFocus = (e) => {
    setFocus(true);
  };

  const _onSelect = (woeid) => {
    onSelect(woeid)
    setFocus(false);
  };

  const _detectClickOutside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setFocus(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  _detectClickOutside(suggestionRef);

  useEffect(() => {
    setLocations(queryResults);
  }, [queryResults]);

  useEffect(() => {
    if (!value) {
      setLocations([]);
    }
  }, [value]);

  const locationSelection = locations.map((location) => {
    const {woeid, title, location_type} = location;
    return (
      <div
        key={woeid}
        className='input__suggestion-option'
        onClick={() => _onSelect(woeid)}
      >
        <div className='input__suggestion-text--option'>
          {title}
        </div>
      </div>
    );
  });

  return (
    <InputGroup className={className}>
      <InputGroup.Prepend>
        <InputGroup.Text id='basic-addon1'>
          <i className='fa fa-search' />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={value}
        onChange={onChange}
        onFocus={_onFocus}
        placeholder='Search'
      />
      {value.length > 0 && isFocus && (
        <SearchSuggestion
          loading={loading}
          ref={suggestionRef}
          locationSelection={locationSelection}
        />
      )}
    </InputGroup>
  );
};

SearchField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  queryResults: PropTypes.array,
  loading: PropTypes.bool
};

SearchField.defaultProps = {
  className: '',
  value: '',
  onChange: noop,
  onSelect: noop,
  queryResults: [],
  loading: false
};

export default SearchField;
