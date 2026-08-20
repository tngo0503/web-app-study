import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {dirname, join} from "path";
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT= 3000;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/', (req, res)=>{
  const day = new Date().getDay();
  res.status(200).render('index', {
    day: day
  });
})

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})