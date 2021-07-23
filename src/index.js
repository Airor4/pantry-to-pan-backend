const express = require('express');
const userRouter = require('./routes/user.js');
const queryRouter = require('./routes/query.js');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('welcome to the recipe api');
});

app.use('/user', userRouter);
app.use('/query', queryRouter);

app.listen(port, () => {
  console.log(`recipe backend listening at port: ${port}`);
});
