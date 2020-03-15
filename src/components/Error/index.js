import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App/App'

function Error() {
  const {error} = useProviderContext()
  return (
    <div className={classes.errorContainer}>
      <p className={classes.description}>{error}</p>
    </div>
  )
}

export default Error
