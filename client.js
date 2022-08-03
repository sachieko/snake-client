const net = require('net');
const { stdin: input } = require('process');

const connect = () => {
  const client = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
    input
  });
  client.on("connect", () => {
    client.write(`Name: SSS`);
  });
  return client;
};

module.exports = {
  connect
};