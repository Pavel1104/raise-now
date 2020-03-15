import React from 'react'
import classes from './index.module.scss'
import {useProviderContext} from '../App/App'
import {delayedPostRequest} from '../../API/axios'

function FirstStep() {
  const {setStepCount, dataRequest, setDataRequest,
         setLoading, setError} = useProviderContext()

  const onSubmit = async (event) => {
    event.preventDefault()
    setError("")
    setLoading(true)

    delayedPostRequest(dataRequest)
    .then((result) => {
      console.log(result)
      setLoading(false)
      setStepCount(prevStep => prevStep + 1)
    }).catch((error) => {
      setLoading(false)
      console.warn(error)
      setError(error.toString())
      setDataRequest((prevData) => ({...prevData, mode: undefined}))
    })
  }

  const onChange = (event) => {
    event.persist()
    const {name, value} = event.target
    setDataRequest((prevData) => ({...prevData, [name]: value}))
  }

  const isFormValid = () => {
    return dataRequest.mode === undefined ? false : true
  }

  return (
    <div className={classes.formContainer}>
      <div className={classes.settingsImg}></div>
      <form className={classes.form}  onSubmit={onSubmit}>
        <div className={classes.container}>
          <h1 className={classes.title}>Raise Now Setup</h1>
          <p className={classes.description}>
            The RaiseNow Payment Platform requires the following parameters to be setup
          </p>
        </div>

        <div className={classes.radioButtonContainer}>
          <div className={classes.radioButtonBlock}>
            <input className={classes.radio} type="radio" name="mode"
                    id="mode-test" value="test" onChange={onChange}/>
            <label className={classes.customRadio} htmlFor="mode-test"></label>
            <label className={classes.label} htmlFor="mode-test">
              Test
            </label>
            <p className={classes.tip}>
              Only transactions and subscriptions in test mode are transferred.
            </p>
          </div>
          <div className={classes.radioButtonBlock}>
            <input className={classes.radio} type="radio" name="mode"
                    id="mode-production" value="production" onChange={onChange}/>
            <label className={classes.customRadio} htmlFor="mode-production"></label>
            <label className={classes.label} htmlFor="mode-production">
              Production
            </label>
            <p className={classes.tip}>
              Only transactions and subscriptions in production mode are transferred.
            </p>
          </div>
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
