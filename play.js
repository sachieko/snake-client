const net = require('net');

// DO NOT SHARE THIS IP.
// const IP = '127.0.0.1';

// const NAME = 'Sachieko';
const input = require('process').stdin;
const connect = () => {
  const client = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
    input: input
  });

  client.setEncoding('utf8');
  client.on("data", (data) => {
    console.log(data);
  });
  // input.on('w', () => {
    // client.write(`Move: Up`);
  // });
  return client;
};

console.log("Connecting ...");
connect();
// Snek game ^
// client.write("Move: Up")
// client.write("Move: Down")
// client.write("Name: ____")