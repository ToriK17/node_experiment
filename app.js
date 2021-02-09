var http = require('http');
const request = require('request');
const axios = require('axios');

// several different libraries and node requests 

// The Basic One & spinning up a userless server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello Useless App!');
  
  res.end();
}).listen(8080);

// No longer supported but tidy and clean
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});

// Axios, the work approved one, tidy enough
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });