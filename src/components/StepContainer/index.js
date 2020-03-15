import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App/App'
import FirstStep from '../FirstStep'
import SecondStep from '../SecondStep'
import Spinner from '../Spinner'
import Error from '../Error'

function StepContainer() {
  const {loading, error, stepCount} = useProviderContext()
  return (
    <div className={classes.stepContainer}>
      {!!error && <Error/>}
      {loading && <Spinner/>}

      {!loading && stepCount === 1 && <FirstStep/>}
      {!loading && stepCount === 2 && <SecondStep/>}
    </div>
  )
}

export default StepContainer
