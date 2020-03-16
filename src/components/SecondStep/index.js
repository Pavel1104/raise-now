import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App'

function SecondStep() {
  const {data} = useProviderContext()

  return (
    <div className={classes.formContainer}>
      <div className={classes.settingsImg}/>
      <form className={classes.form}>
        <div className={classes.container}>
          <h1 className={classes.title}>Raise Now Setup</h1>
          <p className={classes.description}>
            The RaiseNow Payment Platform requires the following parameters to be setup
          </p>
        </div>
        <div className={classes.container}>
          <p className={classes.description}>
            On previous step {data.mode} mode was selected
          </p>
        </div>
        <div className={classes.container}>
          <button className={classes.button} type="submit"
                  disabled={true}>
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default SecondStep
