//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, "views"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.post('/check', (req, res)=>{
  if(req.body['password'] === "ILoveProgramming") res.render('secret');
  res.redirect('/');
})

app.get('/', (req, res)=>{
  res.status(200).render('index');
});

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})