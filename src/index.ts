import express from 'express';
// @ts-ignore
import cors from 'cors';
import 'dotenv/config';

import userRouter from './routes/user';
import queryRouter from './routes/query';


const app = express();

// 8080 for nginx and eb
//const port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({origin: 'https://pantrytopan.org'}));
// app.options('*', cors())

app.get('/', (req, res) => {
  res.send('welcome to the recipe api');
});

app.use('/user', userRouter);
app.use('/query', queryRouter);


