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
const handleUserInput = (data) => {
  if (data === '\u0003') console.log("Exiting!...\n"), process.exit();
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = {
  connect,
  setupInput
};