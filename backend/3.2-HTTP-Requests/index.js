import express from 'express';
const app = express();
const port = 3000;
// const ip = "127.0.0.1";

app.get('/', (req, res) => {
  res.send("Hello, world. This is `/` page and hello again\n");
  res.send(req);
})

app.get('/home', (req, res) => {
  res.send("Hello, world. You are at /home. This is awesome sauce");
  console.log(req);
})

app.listen(port, (error) => {
  if (error) {
    console.log(error.stack);
    throw error;
  }
  console.log(`Server is listening on port ${port}`);
})