import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App'
import {delayedPostRequest} from '../../API'

function FirstStep() {
  const {
    setStep,
    data,
    setData,
    setLoading,
    setError,
  } = useProviderContext()

  const onSubmit = async (event) => {
    event.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await delayedPostRequest(data)
      setLoading(false)
      setStep(prevStep => prevStep + 1)
    } catch (error) {
      setLoading(false)
      setError(error.toString())
      setData((prevData) => ({...prevData, mode: undefined}))
    }
  }

  const onChange = (event) => {
    event.persist()
    const {name, value} = event.target
    setData((prevData) => ({...prevData, [name]: value}))
  }

  const isFormValid = () => {
    return data.mode !== undefined
  }

  return (
    <div className={classes.formContainer}>
      <div className={classes.settingsImg}/>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.container}>
          <h1 className={classes.title}>Raise Now Setup</h1>
          <p className={classes.description}>
            The RaiseNow Payment Platform requires the following parameters to be setup
          </p>
        </div>

        <div className={classes.radioButtonContainer}>
          <label className={classes.radioButtonBlock} htmlFor="mode-test">
            <input className={classes.radio} type="radio" name="mode"
                   id="mode-test" value="test" onChange={onChange}/>
            <div className={classes.customRadio}/>
            <p className={classes.label}>
              Test
            </p>
            <p className={classes.tip}>
              Only transactions and subscriptions in test mode are transferred.
            </p>
          </label>
          <label className={classes.radioButtonBlock} htmlFor="mode-production">
            <input className={classes.radio} type="radio" name="mode"
                   id="mode-production" value="production" onChange={onChange}/>
            <div className={classes.customRadio}/>
            <p className={classes.label}>
              Production
            </p>
            <p className={classes.tip}>
              Only transactions and subscriptions in production mode are transferred.
            </p>
          </label>
        </div>

        <div className={classes.container}>
          <button className={classes.button} type="submit"
                  disabled={isFormValid() === false}>
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default FirstStep
