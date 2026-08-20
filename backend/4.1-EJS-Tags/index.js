import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));



app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
