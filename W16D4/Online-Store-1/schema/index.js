const { makeExecutableSchema } = require("graphql-tools");
const mongoose = require("mongoose");

const types = require('./types');
const { merge } = require('lodash');

const otherTypeDefs = `
  type Mutation {
    _empty: Boolean
  }
`;

const typeDefs = [...types.map(type => ( type.typeDefs )), otherTypeDefs];
const resolvers = [...types.map(type => ( type.resolvers ))];


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = {
  schema,
  typeDefs,
  resolvers
};