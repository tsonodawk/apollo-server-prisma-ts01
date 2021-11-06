import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import { join } from 'path'
import { resolvers } from './resolvers'
import { GraphQLSchema } from 'graphql'

// スキーマの定義
const schema = loadSchemaSync(join(__dirname, './schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
})

const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

async function startApolloServer(schemaWithResolvers: GraphQLSchema) {
  // const server = new ApolloServer({ schema, resolvers })
  const server = new ApolloServer({ schema: schemaWithResolvers, debug: true })
  const app = express()
  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  app.listen(4000, () => {
    // console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}

startApolloServer(schemaWithResolvers)
