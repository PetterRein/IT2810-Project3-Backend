import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      helloWorld: {
        type: GraphQLString,
        resolve: () => 'Hello World'
      }
    })
  })
})

export default schema