let connection;
let int;
const { UP, LEFT, DOWN, RIGHT, GREET, MEME, MEME2, MEME3, EAT, EXITMSG, QUITKEY } = require('./constants');
const handleUserInput = (data) => {
  if (data === QUITKEY) console.log(EXITMSG), process.exit();
  if (data === 'w') int ? clearInterval(int) : null, int = setInterval(() => connection.write(UP), 110);
  if (data === 'a') int ? clearInterval(int) : null, int = setInterval(() => connection.write(LEFT), 110);
  if (data === 's') int ? clearInterval(int) : null, int = setInterval(() => connection.write(DOWN), 110);
  if (data === 'd') int ? clearInterval(int) : null, int = setInterval(() => connection.write(RIGHT), 110);
  if (data === '1') int ? clearInterval(int) : null, connection.write(GREET);
  if (data === '2') int ? clearInterval(int) : null, connection.write(MEME);
  if (data === '3') int ? clearInterval(int) : null, connection.write(MEME2);
  if (data === '4') int ? clearInterval(int) : null, connection.write(MEME3);
  if (data === '5') int ? clearInterval(int) : null, connection.write(EAT);
};
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = {
  setupInput,
};