import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const MovieCommentType = new GraphQLObjectType({
  name: 'MovieComment',
  fields: () => ({
    id: { type: GraphQLID },
    movieid: { type: GraphQLID },
    comment: { type: GraphQLString }
  })
})

export default MovieCommentType;