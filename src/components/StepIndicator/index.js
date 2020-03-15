import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App/App'

function StepIndicator() {
  const {stepCount} = useProviderContext()

  return (
    <p className={classes.stepIndicator}>
      Step {stepCount} of 3
    </p>
  )
}

export default StepIndicator
