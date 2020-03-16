import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App'
import FirstStep from '../FirstStep'
import SecondStep from '../SecondStep'
import Spinner from '../Spinner'
import Error from '../Error'

function StepContainer() {
  const {loading, error, step} = useProviderContext()
  return (
    <div className={classes.stepContainer}>
      {!!error && <Error/>}
      {loading && <Spinner/>}

      {!loading && step === 1 && <FirstStep/>}
      {!loading && step === 2 && <SecondStep/>}
    </div>
  )
}

export default StepContainer
