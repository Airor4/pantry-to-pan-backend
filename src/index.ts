import express from 'express';
// @ts-ignore
import cors from 'cors';
import 'dotenv/config';

import userRouter from './routes/user';
import queryRouter from './routes/query';


const app = express();

const port = 3000;

app.use(cors({"origin": process.env.FRONTEND_ORIGIN}));
// app.options('*', cors())

app.get('/', (req, res) => {
  res.send('welcome to the recipe api');
});

app.use('/user', userRouter);
app.use('/query', queryRouter);

app.listen(process.env.port || port, () => {
  console.log(`recipe backend listening at port: ${port}`);
});
