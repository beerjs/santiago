'use strict'

var fs = require('fs')
var path = require('path')
global.Vue = require('vue')
var layout = fs.readFileSync('./index.html', 'utf8')
var renderer = require('vue-server-renderer').createRenderer()
var express = require('express')
var server = express()


server.use('/assets', express.static(
  path.resolve(__dirname, 'assets')
))


server.get('*', function (request, response) {
  renderer.renderToString(
    require('./assets/app')(),
    function (error, html) {
      if (error) {
        console.error(error)
        return response
          .status(500)
          .send('Server Error')
      }
      response.send(layout.replace('<div id="app"></div>', html))
    }
  )
})

// Listen on port
var port = 6969;

server.listen(port, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:' + port)
})
