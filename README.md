# pantry-to-pan-backend
Express server that takes api requests from pantrytopan.org (angular frontend) built with typescript.

# Development
dev server can be run using 
`npm run dev`

# Production
The express app has a cd pipeline setup with codepipeline in order to deploy to AWS Elastic Beanstalk. CodePipeline uses CodeCommit to pull the code and trigger the pipeline when new code is merged into master. CodeBuild uses the buildpsec.yml to compile the code into executable js and uploads the artifacts to s3. The artifacts are then deployed to elastic beanstalk. A beanstalk deployment is made up of an application and an application. Beanstalk has a built in load balancer. The load balancer needs an added listener that listens on port 443 for https. The route53 PantryToPan subdomain, api.pantrytopan.org, also needs an alias record to point to the ARN of the beanstalk environment. SSL is enabled on api.pantrytopan.org through aws' certificate manager

## Environment variables
- NODE_ENV=production
- FRONTEND_ORIGIN=pantrytopan.org (for cors. Not sure if I should limit cors or the security group. maybe both?)
- PORT=8080
- X_RAPIDAPI_KEY= (spoonacular api key)
- X_RAPIDAPI_HOST= (spoonacular api key)
