import express from "express"
import bodyParser from "body-parser"
import { creaTopics } from "./creaTopic.js";
import { nuevosMiembros, reponerStock, ubicacionCarrito, ventaDiaria } from "./enviaTopic.js";

const app = express()
const port = 1000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

creaTopics();

app.post('/registroMiembro', (req, res) => {
  nuevosMiembros(req.body);
  res.send("Toro bn!")
})

app.post('/venta', (req, res) => {
  console.log(req.body)
  const venta = {
    miembro : req.body.nombre,
    vendido : req.body.cantidad,
    hora : req.body.hora
  }
  ventaDiaria(venta)

  const stock = {
    cliente : req.body.nombre,
    stock : req.body.stockRestante
  }

  reponerStock(stock);

  const ubicacion = {
    miembro : req.body.nombre,
    ubicacion : req.body.ubicacion
  }

  ubicacionCarrito(ubicacion, 1)

  res.send("Toro bn!")
})

app.post('/profugo', (req, res) => {

  const ubicacion = {
    miembro : req.body.nombre,
    ubicacion : req.body.ubicacion
  }

  ubicacionCarrito(ubicacion, 2)

  res.send("Toro bn!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
