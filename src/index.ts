import express from 'express';
// @ts-ignore
import cors from 'cors';
import 'dotenv/config';

import userRouter from './routes/user';
import queryRouter from './routes/query';


const app = express();

// 8080 for nginx and eb
const port = process.env.PORT || 8080;

if (process.env.DEV_ENV ) {
  app.use(cors({origin: 'http://localhost:4200'}));
} else {
  console.log('Cors enabled for prod');
  app.use(cors({origin: 'https://pantrytopan.org'}));
}

app.get('/', (req, res) => {
  res.send('welcome to the recipe api');
});

app.use('/user', userRouter);
app.use('/query', queryRouter);

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});


