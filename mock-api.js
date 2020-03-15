const express = require('express')
const apiMocker = require('connect-api-mocker')
const cors = require('cors')

const app = express()

const allowedOrigins = [
  "http://localhost:3000",
]

app.use(cors({
  origin: (origin, callback) => {
    if(allowedOrigins.indexOf(origin) === -1){
      let msg = "The CORS policy for this site does not " +
                "allow access from the specified Origin " +
                origin
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  }
}))

app.use("/api", apiMocker("mock-api"))

app.listen(9000)
