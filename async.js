// Accessing the file system is back-end only (NodeJS).
const fs = require('fs');

function readFile() {
  let fileData;

  // Asynchronous task. This will display last, since it loads the file first
  fileData = fs.readFile('data.txt', function (error, fileData) {
    console.log('File parsing done!');
    console.log(fileData.toString());
  });

  // Synchronous task. This will display first, while readFile is loading.
  console.log('Hello World!');
}

readFile();
