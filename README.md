
<div align="center"> <img src="plutus21.jpg" alt="Plutus21 Capital  Logo" width="80" height="80"> <h1>Plutus21 Capital Coding Task
</h1> </div>


A serverless Node.js application using AWS Lambda and DynamoDB to retrieve tasks for a to-do list application.

# Features

- Fetches tasks from a DynamoDB table
- Built with Node.js and TypeScript
- Implements OOP principles with proper class structure
- Uses async/await for handling asynchronous operations
- Implements robust error handling
- Deployed as an AWS Lambda function with API Gateway

# Architecture
This project follows a serverless architecture with:

- `AWS Lambda:` Handles HTTP requests
- `API Gateway:` Exposes the Lambda function as an HTTP endpoint
- `DynamoDB:` Stores task data
- `CloudWatch Logs:` Stores function execution logs

# Project Structure

```
todo-lambda-function/
├── src/
│   ├── handler.ts               # Lambda function Service handler
│   ├── models/
│   │   └── Task.ts              # Task data schema
│   ├── services/
│   │   └── TaskService.ts       # lamba function for DynamoDB operations
│   └── utils/
│       └── responseHelper.ts    # Helper for API responses
├── serverless.yml               # Serverless Framework configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies

``` 
# Prerequisites

- Node.js v14+ and npm
- AWS CLI configured with appropriate credentials
- Serverless Framework CLI


## Setup Instructions

Clone the project

```bash
  git clone https://github.com/fahadyaseen001/Plutus21-Capital-Coding-Task.git
```

Go to the project directory

```bash
  cd Plutus21-Capital-Coding-Task
```

Install dependencies

```bash
  npm install
```

Configure AWS credentials

```bash
 aws configure
```
### Create S3 Bucket

Create an S3 Bucket (Deployment Bucket) named "todo-aws-s3-bucket-test" using AWS Console or u can create your own bucket with any name and manually change the deployment bucket name to your `serverless.yml` under the `deploymentBucket` section:

```yml
deploymentBucket:
    name: your-s3-bucket-name
```

### Create DynamoDB Table

Create a DynamoDB table named `TasksTable` with a primary key `id` (String).You can do this manually in the AWS Console or add the following to your `serverless.yml` under the `resources` section:

```yml
resources:
  Resources:
    TasksTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: TasksTable
        BillingMode: PAY_PER_REQUEST
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
```

### Deploy the service

```bash
npx serverless deploy
```
## API Endpoint
After deployment, you'll get an endpoint URL like:
```bash
https://xk2tydgzf4.execute-api.ap-south-1.amazonaws.com/dev/tasks
```
## Usage
Send a GET request to the endpoint to retrieve tasks:
```bash
curl https://xk2tydgzf4.execute-api.ap-south-1.amazonaws.com/dev/tasks
```
## Testing Locally

To test the function locally:
```bash
npm test
```

## Thought Process For Understanding The Task & Coding It 💭

- Started by analyzing the serverless API requirements and listing them for clarity
- Identified key components: AWS Lambda, TypeScript, DynamoDB, and OOP principles
- Designed project structure with clean separation of concerns (models, services, handlers)
- Created the Task model interface to define data structure
- Implemented Lamba Function Implementation class using OOP principles for DynamoDB operations
- Applied comprehensive error handling with try/catch blocks
- Created utility functions for standardized API responses
- Built Lambda function handler with async/await pattern for better readability
- Configured serverless.yml for infrastructure as code
- Resolved IAM permission challenges during deployment
- Tested endpoint functionality with DynamoDB integration
- Optimized Lambda performance and error logging
- Maintained clean code with proper naming conventions and TypeScript typing


## Required IAM Permissions
The deployment user needs these permissions:

- CloudFormation full access
- Lambda full access
- API Gateway administrator
- DynamoDB full access
- CloudWatch Logs full access
- IAM role creation permissions

## Thank You 💌
Thank you for taking the time to review this project. I've put significant effort into creating a scalable solution that meets all the requirements for this task. I look forward to discussing the implementation details and hearing your valuable feedback.

Feel free to reach out if you have any questions or need clarification about any aspect of the project.