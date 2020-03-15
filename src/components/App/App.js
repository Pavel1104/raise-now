import React, {useState} from 'react'
import constate from 'constate'
import Sticked from '../Sticked'
import StepContainer from '../StepContainer'

export const [Provider, useProviderContext] = constate(() => {
  const [stepCount, setStepCount] = useState(1)
  const [dataRequest, setDataRequest] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  return {
    stepCount,
    setStepCount,
    dataRequest,
    setDataRequest,
    loading,
    setLoading,
    error,
    setError,
  }
})

function App() {
  return (
    <Provider>
      <Sticked/>
      <StepContainer/>
    </Provider>
  )
}

export default App
