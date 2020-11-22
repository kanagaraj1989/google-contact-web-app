const config = {
  webApp: {
    port: process.env.SERVICE_PORT || 3000
  },
  middleware: {
    host: process.env.HOST || 'http://localhost:8080',
    apiPath: {
      getPeopleList: process.env.GET_PEOPLE_PATH || '/social-app/google/people/list?page=0&pageSize=10',
      getAccessToken: process.env.GET_ACCESS_TOKEN_PATH || '/social-app/google/authToken'
    }
  }
}

export default config;
