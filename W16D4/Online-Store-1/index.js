const graphqlHTTP = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("./models");
const db = require('./config/keys').mongoURI;
const { schema } = require('./schema');
const { resolvers } = require('./schema');

const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());
const { passportAuthenticate } = require('./middlewares');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
if (process.env.NODE_ENV !== 'production') {
  const cors = require('cors');
  app.use(cors({ origin: 'http://localhost:3000' }));
}

app.use(
  "/graphql",
  passportAuthenticate(passport),
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers
  })
);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));