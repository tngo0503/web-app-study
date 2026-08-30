// import fs from 'fs/promises';

// async function readJSON(filePath) {
//   const raw = await fs.readFile(filePath, 'utf-8');
//   return JSON.parse(raw);
// }

// const data = await readJSON('./data/data.json'); // top-level await works in ESM
// console.log(data);
// console.log(data[0]);
// console.log('============');

// for(let i = 0; i < data.length; ++i){
//     console.log(data[i].title);
// }
import fs from 'fs';

async function readJSON(filePath) {
  console.log('1: starting');
  const raw = await fs.readFile(filePath, 'utf-8');
  console.log('3: got the file');
  return JSON.parse(raw);
}

console.log('A: before calling');
readJSON('./data/data.json');
console.log('B: after calling');