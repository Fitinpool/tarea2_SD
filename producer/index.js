import express from "express"
import bodyParser from "body-parser"
import { creaTopics } from "./creaTopic.js";
import { nuevosMiembros, reponerStock, ventaDiaria } from "./enviaTopic.js";
import sql from "../consumer/postgres.js";

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

app.post('/venta', (req, res) => {
  console.log(req.body)
  const venta = {
    cliente : req.body.cliente,
    vendido : req.body.cantidad,
    hora : req.body.hora
  }
  ventaDiaria(venta)

  const stock = {
    cliente : req.body.cliente,
    stock : req.body.stockRestante
  }

  reponerStock(stock);

  res.send("Toro bn!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
