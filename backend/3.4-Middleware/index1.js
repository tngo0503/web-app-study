import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  console.log(`Street name: ${req.body.street}`);
  console.log(`Pet name: ${req.body.pet}`);
  
  res.status(200).json({'street': req.body.street, 'pet': req.body.pet});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
