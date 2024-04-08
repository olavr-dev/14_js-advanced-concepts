// Accessing the file system is back-end only (NodeJS).
// const fs = require('fs');

// fs/promises is a built in package.
const fs = require('fs/promises');

function readFile() {
  let fileData;

  // // Asynchronous task using a callback function
  // This will display last, since it loads the file first
  // fileData = fs.readFile('data.txt', function (error, fileData) {
  //   console.log('File parsing done!');
  //   console.log(fileData.toString());
  // });

  // Since we call now call fs/promises it does no longer require a
  // callback function

  // This is a promise chain
  fs.readFile('data.txt')
    .then(function (fileData) {
      console.log('File parsing done!');
      console.log(fileData.toString());
    })
    // return anotherAsyncOperation
    .then(function () {})
    // error handling
    .catch(function (error) {
      console.log(error);
    });

  // Synchronous task. This will display first, while readFile is loading.
  console.log('Hello World!');
}

readFile();
