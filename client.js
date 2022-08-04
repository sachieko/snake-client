const net = require('net');
const { stdin: input } = require('process');
const { IP, PORT, NAME } = require('./constants');
const connect = () => {
  const client = net.createConnection({
    host: IP,
    port: PORT,
    input
  });
  client.on("connect", () => {
    client.write(`${NAME}`);
  });
  return client;
};

module.exports = {
  connect
};