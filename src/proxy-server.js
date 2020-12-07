const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const {createProxyMiddleware} = require('http-proxy-middleware');


app.use('/search', createProxyMiddleware({
  target: 'https://www.metaweather.com/api/location',
  changeOrigin: true
})
)
app.use('/:woeid', createProxyMiddleware({
  target: 'https://www.metaweather.com/api/location',
  changeOrigin: true
})
)

app.use(express.static(path.join(__dirname, '../build')));

app.use(cors())

app.listen(3002, () => {
  console.log(`Proxy server started on port 3002`);
});
