# pantry-to-pan-backend
Express server that takes api requests from pantrytopan.org (angular frontend) built with typescript.

# Development
dev server can be run using 
`npm run dev`

# Production
## How it works
The express app has a cd pipeline setup with codepipeline in order to deploy to AWS Elastic Beanstalk.

## Things to remember
When the npm packages are installed I need to run `npm install --production` in order to avoid installing dev dependencies however this may not install tsc so I need to check in on that and see if tsc is installed in time in order to compile it for the beanstalk app.

## Environment variables
- NODE_ENV=production
- FRONTEND_ORIGIN=pantrytopan.org (for cors. Not sure if I should limit cors or the security group. maybe both?)
- PORT=80/443 [An Amazon EC2 security group configured to allow inbound traffic on port 80.](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs_express.html)
- X_RAPIDAPI_KEY= (spoonacular api key)
- X_RAPIDAPI_HOST= (spoonacular api key)
