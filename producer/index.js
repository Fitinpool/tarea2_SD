import express from "express"
import bodyParser from "body-parser"
import { creaTopics } from "./creaTopic.js";
import { nuevosMiembros } from "./enviaTopic.js";

const app = express()
const port = 1000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

creaTopics();

app.post('/registroMiembro', (req, res) => {
  console.log(req.body)
  nuevosMiembros(req.body);
  res.send("Toro bn!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
