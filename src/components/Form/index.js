import React from 'react'
import classes from './index.module.scss'


function Form() {
  return (
    <div className={classes.formContainer}>
      <div className={classes.settingsImg}></div>
      <form className={classes.form}>
        <div className={classes.container}>
          <h1 className={classes.title}>Raise Now Setup</h1>
          <p className={classes.description}>
            The RaiseNow Payment Platform requires the following parameters to be setup
          </p>
        </div>

        <div className={classes.radioButtonContainer}>
          <div className={classes.radioButtonBlock}>
            <input className={classes.radio} type="radio" name="mode"
              id="mode-test" value="Production"/>
            <div className={classes.customRadio}></div>
            <label className={classes.label} htmlFor="mode-test">Test</label>
            <p className={classes.tip}>
              Only transactions and subscriptions in test mode are transferred.
            </p>
          </div>
          <div className={classes.radioButtonBlock}>
            <input className={classes.radio} type="radio" name="mode"
              id="mode-production" value="Production"/>
            <div className={classes.customRadio}></div>
            <label className={classes.label} htmlFor="mode-production">Production</label>
            <p className={classes.tip}>
              Only transactions and subscriptions in production mode are transferred.
            </p>
          </div>
        </div>

        <div className={classes.container}>
          <button className={classes.button} type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default Form
