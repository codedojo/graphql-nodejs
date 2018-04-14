const express = require('express');
const graphqlMiddleware = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema');
const resolvers = require('./resolvers');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/graphql-intro');

mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

const api = express();

api.all('/graphql', graphqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: true
}));

module.exports = api;