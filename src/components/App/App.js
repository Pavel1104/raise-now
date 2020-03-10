import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
    <div className="App">
      {!!RequestErrorMessage && <p>{RequestErrorMessage}</p>}
      <p>please welcome</p>

      <div>
        {showLoading &&
          <span>Loading...</span>
        }
        <form onSubmit={saveProduct}>
          <div>
            <label>Product Name {dataPostRequest.mode}</label>
          </div>
          <button type="submit">
            Save
          </button>
        </form>
      </div>

    </div>
  )
}

export default App
