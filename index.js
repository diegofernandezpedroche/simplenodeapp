const http = require("http");
// test 2
const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1> Server HTTP with Nodejs </h1>');
  response.end();
});

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});
