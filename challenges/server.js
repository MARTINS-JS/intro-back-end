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
  const pageDataAbout = {
    logo_url: '/rocketseat-symbol.svg',
    name: 'Rocketseat',
    role: 'A plataforma completa para você aprender programação do zero no seu ritmo, se tornar full stack e se especializar em diversas tecnologias sem sair de casa.',
    technologies: [
      'JavaScript',
      'NodeJS',
      'DevOps',
      'ReactJS',
      'React Native'
    ],
    links: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/rocketseat/'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/rocketseat'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/rocketseat'
      }
    ]
  }

  return response.render('about', { data: pageDataAbout })
})

server.get('/articles', function(request, response) {
  return response.render('articles', { cards: database })
})

server.use(function(request, response) {
  response.status(404).render("not-found");
});

server.listen(5000)
