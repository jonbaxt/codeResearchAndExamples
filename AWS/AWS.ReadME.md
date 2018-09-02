# AWS Seminar Web Applications with AWS as a platform

This is my notes from the Front-End-Masters course for Rapid Development on AWS with Steve Kinney. https://www.frontendmasters.com

Github Repo for this front end masters presentation: https://github.com/jonbaxt/AWS-for-Frontend-Engineers

This is forked from the main repo which is here: https://github.com/stevekinney/AWS-for-Frontend-Engineers


Steve Kinneys Instructions on how to deploy Full Stack with Node.js and React with AWS: https://gist.github.com/stevekinney/941e815e3f2ae824529cc4470e45794c

Steve's Intro to NodeBots: https://gist.github.com/stevekinney/bcd0fef3fb7cd9ce5af8ffba08480b02


## Pointers when using AWS

### Creating a User

- Do not use your root user to access your AWS on the web. Instead create an additional user to access things. Doing so will reduce the likelihood of your stuff getting stolen and your whole account being vulnerable in a project etc.

- If you are doing a project in a team it may be better to create a group. If your not then adding existing permissions from the Amazon database, may be better off in the long run.

- When you get your new user key, it is recommended to download the .csv file of that key since Amazon will only show that key once and then never again.

- After User is created, make sure that you login using the other user and not the root user when using the console or anything etc.

### Different Types of setups that come customer when using wrappers in AWS.

Steve said that the ones he goes over are custom wrappers that wrap around other types of Mobile hub setups for developers.

The ones that Steve covered are:
    - AWS Mobile Hub
        - A dashboard for easily managing multiple AWS services.
        - Provides a graphical abstraction over DynamoDB, Cognito, Pinpoint, and other services.
            - Stuff they can do:
                - Authentication (Cognito)
                - Storage (S3)
                - Serverless Functions (Lambda && API Gateway)
                - Database (DynamoDB)
                - Hosting (S3 and Cloudfront)
                - Analytics and Notifications (Pinpoint)
    - AWS Amplify
        - A JavaScript Library with a bunch of helper functions for working with AWS Mobile Hub.
        - It also includes aws-amplify-react, 
    - AWS AppSync
        - GraphQL as a Service
        - Can be built in DynamoDB, Elastic Search, or Lambda functions.
        - Can be used with AWS Amplify and Mobile Hub, but it doesn't need to.

    - AWS Mobile CLI
        - Gives you a command-line interface for quickly setting up, configuring, and deploying applications on AWS Mobile Hub.


