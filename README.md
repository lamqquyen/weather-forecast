# Getting Started with Weather Forecast App

## Prerequisite

NodeJS version 10+

## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds the app to the `build` folder and install all dependencies.

### `yarn start`

Start the proxy-server and client application. Before running it, you must run `yarn build` for building a client application.

Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

We can customize the PORT by set the environment PORT variable before starting.

```
export PORT = 3000
```

### `yarn test`

Launches the test runner in the interactive watch mode.

## Additional Information:
- The application using public API `https://www.metaweather.com/api/` to get data
- Proxy-server is built to handle CORS issues of public API `https://www.metaweather.com/api/` when fetching it.

## Heroku deployed website of this application
```https://weather-forecast-ql.herokuapp.com/``` 
