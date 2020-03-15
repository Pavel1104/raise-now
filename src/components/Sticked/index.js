import React from 'react'
import classes from './index.module.scss'
import Header from '../Header'
import StepIndicator from '../StepIndicator'

function Sticked() {
  return (
    <div className={classes.sticked}>
      <Header/>
      <StepIndicator/>
    </div>
  )
}

export default Sticked
