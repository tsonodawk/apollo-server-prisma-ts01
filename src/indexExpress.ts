import express from 'express'
import http from 'http'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServer, AuthenticationError, gql } from 'apollo-server-express'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import { join } from 'path'
import { resolvers } from './resolvers'
import { GraphQLSchema } from 'graphql'
import { Context } from './types/context'

// スキーマの定義
const schema = loadSchemaSync(join(__dirname, './schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
})

const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

const getUser = (token?: string): Context['user'] => {
  token = 'dummy'
  if (token === undefined) {
    throw new AuthenticationError(
      '認証されていないユーザーはリソースにアクセスできません'
    )
  }

  // TODO: Tokenからユーザー情報を取り出す処理

  return {
    name: 'dummy name',
    email: 'dummy@example.com',
    token,
  }
}

async function startApolloServer(schemaWithResolvers: GraphQLSchema) {
  const app = express()
  const httpServer = http.createServer(app)
  // const server = new ApolloServer({ schema, resolvers })
  // console.log('IN SERVER')
  const server = new ApolloServer({
    schema: schemaWithResolvers,
    context: ({ req }) =>
      ({
        user: getUser(req.headers.authorization),
      } as Context),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    debug: true,
  })
  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  )
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)

  // app.listen(4000, () => {
  //   // console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  // })
}

startApolloServer(schemaWithResolvers)
