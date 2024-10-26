const express = require('express')
const nunjucks = require('nunjucks')

const database = require('./data')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(request, response) {

  const pageDataAbout = {
    avatar_url: 'https://avatars.githubusercontent.com/u/179001313?v=4',
    name: 'Martins',
    role: 'Estudante - Full Stack',
    description: 'Determinado em aprender programação na <a target="_blank" href="https://www.rocketseat.com.br/">Rocketseat</a>',
    links: [
      { name: 'Instagram', url: '#' },
      { name: 'GitHub', url: '#' },
      { name: 'LinkedIn', url: '#' }
    ]
  }

  return response.render('about', { data: pageDataAbout })
})

server.get('/portfolio', function(request, response) {
  return response.render('portfolio', { cards: database })
})

server.get('/video', function(request, response) {
  const id = request.query.id
  
  const video = database.find(function(video) {
    if (video.id == id) {
      return true
    }
  })

  if (!video) {
    return response.send('Video not found!')
  }

  return response.render('video', { video })
})

server.listen(5000, function() {
  console.log('server is running!')
})
