# Pomelo Full-stack Backend

A simple API that listens to requests on http://localhost:3000/ using Typescript and Express

# Installation

1. Clone this repository
2. Navigate to this folder via your terminal and run ```npm i``` to install the NPM packages
3. Once installed, run `npm run dev` to deploy the API server on localhost.

#  How it works

### Read Transaction
- Reads the mock JSON db and returns all the transaction data

### Add Transaction
- Adds the new transaction data stored in ```req.body``` to the mock JSON db
- If any required fields ('date', 'first_name', 'last_name', 'email', 'item', 'price', 'currency') are missing, a status code 400 will be returned with actionable feedback i.e. "The following required fields are missing: ..."

# Test (on Postman)

### GET 
- Select the GET method in your request and key in ```localhost:3008/transactions``` in the URL field
- Click the "Send" button
- You will receive a JSON file with all the transaction data

### POST 
- Select the POST method in your request and key in ```localhost:3008/transactions``` in the URL field
- Click the "Send" button
- If you misses out any required fields in your ```req.body```, you will receive an error message with actionable feedback
- If not, you will receive a JSON file with all the previous transaction data including the newly updated data

# Requirements checked
- [x] Setup an API that will listen to requests on http://localhost:3000/ using Typescript and Express
- [x] Create a GET /transactions endpoint that will return a JSON with a list of transactions. 
- [x] Create a POST /transactions endpoint that will take an item in the format of your datamodel as a JSON body but exclude a required field (e.g. currency) so that the endpoint will throw a meaningful error.


