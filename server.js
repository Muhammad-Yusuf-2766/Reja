const http = require("http");
const app = require("./app");
 
let db;
const connectionString = "";


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The Sever is running  successfully on port ${PORT}, http://localhost:3000`);
})