import express from 'express'
import userRouter from './routes/user';
import queryRouter from './routes/query';

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
