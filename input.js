let connection;
let int;
const handleUserInput = (data) => {
  if (data === '\u0003') console.log("Exiting!...\n"), process.exit();
  if (data === 'w') int ? clearInterval(int) : null, int = setInterval(() => connection.write(up), 110);
  if (data === 'a') int ? clearInterval(int) : null, int = setInterval(() => connection.write(left), 110);
  if (data === 's') int ? clearInterval(int) : null, int = setInterval(() => connection.write(down), 110);
  if (data === 'd') int ? clearInterval(int) : null, int = setInterval(() => connection.write(right), 110);
  if (data === '1') int ? clearInterval(int) : null, connection.write(greet), int;
  if (data === '2') int ? clearInterval(int) : null, connection.write(meme), int;
  if (data === '3') int ? clearInterval(int) : null, connection.write(meme2), int;
  if (data === '4') int ? clearInterval(int) : null, connection.write(meme3), int;
  if (data === '5') int ? clearInterval(int) : null, connection.write(eat), int;
};
const up = "Move: up", left = "Move: left", right = "Move: right", down = "Move: down";
const greet = "Say: Hello there", meme = "Say: General Kenobi", meme2 = "Say: You are a bold one", meme3 = "Say: AYAYA!", eat = "Say: Nom!";
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