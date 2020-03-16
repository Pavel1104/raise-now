import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App'

function StepIndicator() {
  const {step} = useProviderContext()

  return (
    <p className={classes.stepIndicator}>
      Step {step} of 3
    </p>
  )
}

export default StepIndicator
