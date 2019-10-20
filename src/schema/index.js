import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLID, GraphQLInt } from 'graphql';
import mongoose from 'mongoose'
import HelloWorld from '../models/HelloWorld'
import MovieType from '../types/Movie'
import Movie from '../models/Movie';
import MovieCommentType from '../types/MovieComment';
import MovieComment from '../models/MovieComment';

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
    movies: {
      type: new GraphQLList(MovieType),
      resolve () {
        return Movie.find({})
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      args: { first: { type: GraphQLInt }, skip: { type: GraphQLInt} },
      resolve (_, args) {
        return Movie.find({}).skip(args.skip).limit(args.first)
      }
    },
    comments: {
      type: new GraphQLList(MovieCommentType),
      resolve () {
        return MovieComment.find({})
      }
    },
    commentsForMovie: {
      type: new GraphQLList(MovieCommentType),
      args: { movieid: { type: GraphQLID } },
      resolve (_, args) {
        return MovieComment.find({movieid: args.movieid})
      }
    },
    comment: {
      type: MovieCommentType,
      args: { id: { type: GraphQLID } },
      resolve (_, args) {
        return MovieComment.findById(args.id)
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addHelloWorld: {
      type: HelloWorldType,
      args: {
        value: { type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: (parent, args) => {
        let newHelloWorld = new HelloWorld({
          value: args.value
        });
        return newHelloWorld.save()
      }
    },
    addMovieComment: {
      type: MovieCommentType,
      args: {
        movieid: { type: new GraphQLNonNull(GraphQLID)},
        comment: { type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: (parent, args) => {
        let newMovieComment = new MovieComment({
          _id: mongoose.Types.ObjectId(),
          movieid: args.movieid,
          comment: args.comment
        });
        return newMovieComment.save()
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

export default schema