import React from 'react'
import classes from './index.module.scss'

function Spinner() {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>
    </div>
  )
}

export default Spinner
