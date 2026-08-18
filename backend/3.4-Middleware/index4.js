import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan((tokens, req, res) =>{
  return [tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['response-time'](req, res), 'ms',
    tokens.date(req, res),
    tokens.pid(req, res),
    tokens['remote-addr'](req, res),
  ].join(' ');
}));
app.use(bodyParser.urlencoded({extended:true}));
function submitPage(req, res, next){
  res.send(`<h1>You band name is </h1><p>${req.body.street} ${req.body.pet}<\p>`);
  next();
}

app.get('/', (req, res) =>{
  res.status(200).sendFile(join(__dirname, 'public', 'index.html'));
});

app.post('/submit', submitPage);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
