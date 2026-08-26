import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res)=>{
  res.status(200).render('index');
});

