require('dotenv').config();
const express = require('express');
const postRoutes = require('./routes/posts');

// express app
const app = express();

// middleware, express.json attaches the data to request
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/posts', postRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('Connected to DB and listening on port', process.env.PORT);
});
