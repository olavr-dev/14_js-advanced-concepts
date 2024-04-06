// Accessing the file system is back-end only (NodeJS).
const fs = require('fs');

// The rest of the code is valid in both front-end and back-end applications.
function readFile() {
  // Wrapping the line that might fail with try / catch
  try {
    const fileData = fs.readFileSync('data.json');
  } catch {
    console.log('An error has ocurred!');
  }
  console.log('Hello World!');
}

readFile();
