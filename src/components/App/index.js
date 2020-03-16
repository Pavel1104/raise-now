import React, {useState} from 'react'
import constate from 'constate'
import Sticked from '../Sticked'
import StepContainer from '../StepContainer'

export const [Provider, useProviderContext] = constate(() => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  return {
    step,
    setStep,
    data,
    setData,
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
