const express = require('express');
const compression = require('compression');

const path = require('path');

const app = express();
app.use(compression());

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.get('*.woff2', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'font/woff');
  next();
});

app.get('*.css', (req, res, next) => {
  if (req.url.includes('vendor')) {
    next();
  } else {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
  }
});

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000);
