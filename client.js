const net = require('net');
const { stdin: input } = require('process');
const up = "Move: up", left = "Move: left", right = "Move: right", down = "Move: down";

const connect = () => {
  const client = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
    input
  });
  client.on("connect", () => {
    client.write(`Name: SEK`);
  });
  return client;
};

module.exports = {
  connect,
};