const express = require('express')
const nunjucks = require('nunjucks')

const database = require('./data')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
  express: server
})

server.get('/', function(request, response) {
  return response.render('about')
})

server.get('/portfolio', function(request, response) {
  return response.render('portfolio', { cards: database })
})

server.listen(5000, function() {
  console.log('server is running!')
})
