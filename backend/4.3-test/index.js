import express from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT= 3000;

app.set(`view engine`, 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(express.static('public/css/'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get("/users/profile", (req, res)=>{
  res.status(200).render('pages/index.ejs');
});

app.post("/users/profile", (req, res)=>{
  res.locals.fName = req.body.fName;
  res.locals.lName = req.body.lName;
  res.status(201).render('pages/index.ejs');
});


app.listen(PORT, ()=>{
  console.log(`Listening on port  ${PORT}`);
});