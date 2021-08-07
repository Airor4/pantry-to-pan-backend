import express from 'express';
// @ts-ignore
import cors from 'cors';
import 'dotenv/config';

import userRouter from './routes/user';
import queryRouter from './routes/query';


const app = express();

// 8080 for nginx and eb
const port = process.env.PORT || 8080;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// We only need to listen to the port if we are in a dev environment because the load balancer
// automatically forwards requests to our app for us on Elastic Beanstalk

app.get('/', (req, res) => {
  res.send('welcome to the recipe api');
});

app.use('/user', userRouter);
app.use('/query', queryRouter);

if (process.env.DEV_ENV ) {
  app.use(cors({origin: 'http://localhost:4200'}));
  app.listen(port, () => {
    console.log(`app listening on ${port}`);
  });
} else {
  app.use(cors({origin: 'https://pantrytopan.org*'}));
}


