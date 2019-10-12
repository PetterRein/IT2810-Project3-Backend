import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLID } from 'graphql';
import HelloWorld from '../models/HelloWorld'

const HelloWorldType = new GraphQLObjectType({
  name: 'HelloWorld',
  fields: () => ({
    id: { type: GraphQLID },
    value: { type: GraphQLString },
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    helloWorld: {
      type: HelloWorldType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
          return HelloWorld.findById(args.id);
      }
    }, 
    helloWorlds:{
      type: new GraphQLList(HelloWorldType),
      resolve(parent, args) {
          return HelloWorld.find({});
      }
  },
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addHelloWorld: {
      type: HelloWorldType,
      args: {
        value: { type: new GraphQLNonNull(GraphQLString)},
        helloWorldID: { type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: (parent, args) => {
        let newHelloWorld = new HelloWorld({
          value: args.value,
          helloWorldID: args.helloWorldID 
        });
        return newHelloWorld.save()
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

export default schema