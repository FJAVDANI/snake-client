const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:127.0.0.1,
    port:80 ,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
   
  conn.on("connect", () => {
  console.log("connect succesful");
});
  
module
  return conn;
};

module.export = {
  connect
};

