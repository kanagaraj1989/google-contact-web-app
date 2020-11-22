#Google contact web app
web application is designed to authenticate a user using google sign-in api
and display contacts details associated with authenticated user.  

It has been build using Reactjs. It communicate with google-api-middleware server(node.js server)
to fetch contact details by passing access_token returned by google sign-in api.  

1. Authenticate Gmail user by calling google sign-in api and get Auth details (GoogleAccessToken, TokenId, UserName & email) if succeeded
2. It calls google-api-middleware AuthToken Api, to Get token to access other middleware apis (getPeopleApi, etc..) by passing above auth detail.
3. It calls google-api-middleware getPeopleList Api, to get contact detail by passing authToken which returned by google-api-middleware AuthToken Api.

google-api-middleware's host & api endpoint are fetch from env variable and it use default value if env variable are not available.  

NodeJs version : v10.23.0
Yarn version : 1.12.1

Note: here i have attached screenshot for your reference inside screenshot folder.
## Available Scripts

In the project directory, you can run:

### `yarn start`
