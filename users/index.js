const server = require("./API/server.js");

const port = 5000;

server.listen(port, function() {
  console.log(`\n <<< Running on localhost:${port} >>> \n`);
});