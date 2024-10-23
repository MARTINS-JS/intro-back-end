const express = require('express')
const server = express()

server.get('/', function(request, response) {
  return response.send("Hi, how's going?")
})

server.listen(5000, function() {
  console.log('server is running!')
})
