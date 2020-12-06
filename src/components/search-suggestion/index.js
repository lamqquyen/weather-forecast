import React from 'react'
import PropTypes from 'prop-types'
import './style.css';
import LoadingSpinner from '../loading-spinner'

const SearchSuggestion = React.forwardRef(({loading, locationSelection}, ref) => {
  return (
    <div className='input__suggestion-wrapper' ref={ref}>
      {!loading && ( locationSelection.length > 0
        ? locationSelection
        : <div className='input__suggestion-text--not-found'>Location not found!</div>)
      }
      <LoadingSpinner loading={loading} loaderClassName='loading-spinner__loader--search'/>
    </div>
  )
})

SearchSuggestion.propTypes = {
  loading: PropTypes.bool.isRequired,
  locationSelection: PropTypes.array
};

SearchSuggestion.defaultProps = {
  locationSelection: []
}

export default SearchSuggestion;
