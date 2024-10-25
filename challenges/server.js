const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
  express: server
})

server.get('/', function(request, response) {
  return response.render('about')
})

server.get('/articles', function(request, response) {
  return response.render('articles')
})

server.use(function(request, response) {
  response.status(404).render("not-found");
});

server.listen(5000)
