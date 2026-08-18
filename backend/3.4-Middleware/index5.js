import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan((tokens, req, res)=>{
  return [
    tokens.url(req, res),
    tokens.pid(req, res),
    tokens.status(req, res),
    tokens.method(req, res),
    tokens.date(req, res),
    tokens['response-time'](req, res), 'ms',
    tokens['remote-addr'](req, res)
  ].join(' ');
}));

app.post('/submit', (req, res)=>{
  res.render('submit', {
    street: req.body.street,
    pet: req.body.pet,
    submit: 'Submit Page'
  });
});

app.get('/', (req, res)=>{
  res.render('index');
});

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
});