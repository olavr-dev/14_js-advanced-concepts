// Accessing the file system is back-end only (NodeJS).

// fs/promises is a built in package.
const fs = require('fs/promises');

// The async keyword will always return a promise
async function readFile() {
  let fileData;

  // Since we call now call fs/promises it does no longer require a
  // callback function

  // This is a promise chain
  // The await keyword is used in front of any method that returns a promise
  try {
    fileData = await fs.readFile('data.txt');
  } catch {
    error;
  }
  {
    console.log(error);
  }
  console.log('File parsing done!');
  console.log(fileData.toString());

  console.log('Hello World!');
}

readFile();
