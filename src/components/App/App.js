import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './index.module.scss'
import Header from '../Header'
import StepIndicator from '../StepIndicator'
import Form from '../Form'

function App() {
  const [dataPostRequest, setDataPostRequest] = useState({})
  const [showLoading, setShowLoading] = useState(false)
  const [RequestErrorMessage, setError] = useState("")
  const apiUrl = "http://localhost:9000/api"

  useEffect(() => {
    setDataPostRequest({"mode": "test"})
    setError("")
  }, [])

  const saveProduct = (event) => {
    setShowLoading(true)
    setError("")
    event.preventDefault()
    axios.post(apiUrl, dataPostRequest)
      .then((result) => {
        setShowLoading(false)
      }).catch((error) => {setShowLoading(false)
        console.warn(error)
        setError(error.toString())
      })
  }

  return (
    <div className={classes.app}>
      <div className={classes.sticked}>
        <Header/>
        <StepIndicator/>
      </div>

      <Form/>
    </div>
  )
}

export default App
