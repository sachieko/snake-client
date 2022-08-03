const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
const conn = connect();
setupInput(conn);
// Snek game ^
// client.write("Move: Up")
// client.write("Move: Down")
// client.write("Name: ____")