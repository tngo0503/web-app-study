import express from 'express';
import morgan from "morgan";
// import bodyParser from 'body-parser';

const app = express();
const port = 3000;


// app.use((req, res, next) =>{
//   console.log(`url: ${req.url}; method: ${req.method}, headers: ${req.headers}, ip: ${req.ip}, date: ${req.statusMessage} `);
//   next();
// })

app.use(morgan((tokens, req, res) => {
  return [
    tokens.pid(req, res),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens['status'](req, res)
  ].join(' ');
}));

app.get('/', (req, res)=>{
  console.log(a);
  var a = 5;
})

app.listen(port, ()=>{
  console.log(`App listening on port ${port}`);
})
