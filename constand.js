const IP
const PORT

module.exports = {
  IP,
  PORT,
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

module.exports = {
  IP,
  PORT,
  connect
}




