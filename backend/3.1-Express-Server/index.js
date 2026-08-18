import express from 'express';
const app = express();
const port = 3000;

app.listen(3000, (error) => {
  if (error) {
    console.log(error.stack);
    throw error;
  }
  console.log(`Listenting on ${port}`);
})