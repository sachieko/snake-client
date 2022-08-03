const net = require('net');

const connect = () => {
  const client = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  client.setEncoding('utf8');
  client.on("data", (data) => {
    console.log(data);
  });

  return client;
};
module.exports = {
  connect
};