import axios from 'axios'

const apiUrl = "http://localhost:9000/api"

export const postRequest = async (dataPostRequest) => {
  return axios.post(apiUrl, dataPostRequest)
}

// add timout for simulation a long request
const timeout = (ms) => {
  return new Promise((resolve) => {setTimeout(resolve, ms)})
}

export const delayedPostRequest = async (dataPostRequest) => {
  await timeout(2000)
  return postRequest(dataPostRequest)
}
