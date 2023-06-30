import 'reflect-metadata'
import {dataSource} from 'src/data-source'
import {createApp} from 'src/app'
import {authChecker} from 'src/auth-checker'
import {createContextFunction} from 'src/context'
import {resolvers} from 'src/graphql'
import {config} from './config'
console.log(config.jwt.key)
const bootstrap = async () => {
  await dataSource.initialize()
  const {app, httpServer} = await createApp({
    authChecker,
    context: createContextFunction({
      jwt: {
        key: config.jwt.key,
      },
    }),
    resolvers,
  })

  if (import.meta.env.PROD) {
    httpServer.listen({port: config.port})
    console.log(`listening on http://localhost:${config.port}/`)
  }

  return app
}

// noinspection JSUnusedGlobalSymbols
export const viteNodeApp = bootstrap()
