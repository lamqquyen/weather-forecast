import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.css'

const LoadingSpinner = ({wrapperClassName, loaderClassName}) => {

  return (
    <div className = {classNames(['loading-spinner__wrapper', wrapperClassName])} >
      <div className={classNames(['loading-spinner__loader', loaderClassName])} />
    </div>
  )
};

LoadingSpinner.propTypes = {
  className: PropTypes.string
}

LoadingSpinner.defaultProps = {
  className: ''
}

export default LoadingSpinner;
