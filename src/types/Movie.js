import { GraphQLInt, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLID } from 'graphql';

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    popularity: { type: GraphQLInt },
    vote_average: { type: GraphQLInt },
    poster_path: { type: GraphQLString },
    original_language: { type: GraphQLString },
    genre_ids: { type: GraphQLList(GraphQLInt) },
    release_date: { type: GraphQLString },
    overview: { type: GraphQLString }
  })
})

export default MovieType;