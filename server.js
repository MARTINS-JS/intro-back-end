const express = require('express')
const server = express()

server.get('/', function(request, response) {
  return response.send('Hi!')
})

server.listen(5000, function() {
  console.log('server is running!')
})
