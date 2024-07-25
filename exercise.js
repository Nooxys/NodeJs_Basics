const http = require('http')

const routes = require('./exerciseRoutes')

const server = http.createServer(routes)
server.listen(3000)
