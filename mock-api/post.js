module.exports = (request, response) => {
  const mode = request.body.mode
  switch(mode) {
    case "test":
      return response.status(202).send({
        message: "test mode is accepted",
      })
      break

    case "production":
      return response.status(202).send({
        message: "production mode is accepted",
      })
      break

    default:
      return response.status(400).send({
        message: "The request could not be understood by the server"
      })
      break
  }
}
