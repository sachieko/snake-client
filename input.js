let connection;
const handleUserInput = (data) => {
  if (data === '\u0003') console.log("Exiting!...\n"), process.exit();
  if (data === 'w') connection.write(up);
  if (data === 's') connection.write(down);
  if (data === 'a') connection.write(left);
  if (data === 'd') connection.write(right);
};
const up = "Move: up", left = "Move: left", right = "Move: right", down = "Move: down";
const setupInput = function (conn) {
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