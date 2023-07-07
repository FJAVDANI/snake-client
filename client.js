


const net = require("net");

// establishes a connection with the game server

const handleUserInput = function () {
  // your code here
   const stdin = process.stdin;
   stdin.on('data', (key) => {
  process.stdout.write('.');
});
  
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  if (key === '\u0003') {
  process.exit();
}
  return stdin;
};

const connect = function () {
  const conn = net.createConnection({
    Name:"joh"
    Move :up
    host:127.0.0.1,
    port:80 ,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
   
  conn.on("connect", () => {
  console.log("Successfully connected to game server");
});
  
module
  return conn;
};

module.export = {
  connect
};
