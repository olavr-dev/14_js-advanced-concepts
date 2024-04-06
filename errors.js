// Accessing the file system is back-end only (NodeJS).
const fs = require('fs');

function readFile() {
  let fileData;
  // Wrapping the line that might fail with try / catch
  try {
    fileData = fs.readFileSync('data.json');
  } catch (error) {
    console.log('An error ocurred!');
    console.log(error.message);
  }
  console.log(fileData);
  console.log('Hello World!');
}

readFile();
