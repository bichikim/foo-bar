/* eslint-disable import/no-named-as-default-member */
import {ApolloServer, ContextFunction} from '@apollo/server'
import {
  ExpressContextFunctionArgument,
  expressMiddleware,
} from '@apollo/server/express4'
import {BaseContext} from '@apollo/server/src/externalTypes/context'
import express, {Express} from 'express'
import {AuthChecker, buildSchema, PrintSchemaOptions} from 'type-graphql'
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer'
import {Container} from 'typedi'
import http, {Server} from 'http'

export interface EmitSchemaFileOptions extends Partial<PrintSchemaOptions> {
  path?: string
}

export interface CreateAppOptions<Context extends BaseContext = BaseContext> {
  authChecker?: AuthChecker<Context>
  context?: ContextFunction<[ExpressContextFunctionArgument], Context>
  emitSchemaFile?: string | boolean | EmitSchemaFileOptions
  resolvers?: NonEmptyArray<AnyClass>
}

export const createApp = async <Context>(
  options: CreateAppOptions<Context>,
): Promise<{app: Express; httpServer: Server}> => {
  const {authChecker, resolvers, context} = options
  const app = express()
  const httpServer = http.createServer(app)

  app.use(express.json())

  const schema = await buildSchema({
    authChecker,
    container: Container,
    emitSchemaFile: false,
    resolvers,
  })

  const apolloServer = new ApolloServer({
    /**
     * @see https://www.apollographql.com/docs/apollo-server/performance/cache-backends/
     */
    cache: 'bounded',
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    schema,
  })

  await apolloServer.start()

  app.use(
    expressMiddleware(apolloServer, {
      context,
    }),
  )

  return {app, httpServer}
}
