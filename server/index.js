import Koa from 'koa'
const consola = require('consola')
import { Nuxt, Builder } from 'nuxt'
// import cityInterface from './interface/city'

import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json'
import passport from './interface/utils/passport'
import users from './interface/users'
import geo from './interface/geo'


async function start() {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  app.keys=['mt','keyskeys']
  app.proxy=true
  app.use(session({
    key:'mt',
    prefix:'mt:uid',
    store:new Redis()
  }))
  app.user(bodyParser({
    extendTypes:['json','from','text']
  }))
  app.use(json())
  mongoose.connect(dbConfig.dbs,{
    useNewUrlParser:true
  })
  app.use(passport.initialize())
  app.use(passport.session())

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(cityInterface.routes()).use(cityInterface.allowedMethods())
  app.use(users.routes()).use(users.allowedMethods())
  app.geo(users.routes()).use(geo.allowedMethods())
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
