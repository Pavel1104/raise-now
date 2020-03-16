import axios from 'axios'

const apiUrl = "http://localhost:9000/api"

export const postRequest = async (data) => {
  return axios.post(apiUrl, data)
}

// add timout for simulation a long request
const timeout = (ms) => {
  return new Promise((resolve) => {setTimeout(resolve, ms)})
}

export const delayedPostRequest = async (data) => {
  await timeout(500)
  return postRequest(data)
}
