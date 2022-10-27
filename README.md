# Tarea 2
Primeros ejecutamos docker-compose para levantar kafka y zookeeper
```sh
docker-compose up
```

Luego instalamos las librerias
```sh
npm i
```

luego iniciamos la el servidor por el lado del cliente
```sh
node ./producer/index.js
```

Para este apartado se levanta servidor a servidor ya que son distintos servicios, primero ingresamos a la carpeta de consumer y ejecutamos

para ingreso de nuevos miembros

```sh
node ingresoCliente.js
```

para reponer stock

```sh
node preparaStock.js
```

para ventas diarias

```sh
node ventaDIaria.js
```

para ubicacion

```sh
node ubicacion.js
```

Para las consultas de cada uno rellenamos postman o thunderclient o api a preferencia con estos datos json

```sh
localhost:1000/registroMiembro

{
  "nombre" : "Jorge",
  "apellido" : "Guzman",
  "rut" : "12433232-1",
  "correoDueno" : "Jorge.Guzman@sopaipillaschile.com",
  "patenteCarrito" : "FSLS42",
  "registro" : "no premium"
}
```

```sh
localhost:1000/venta

{
  "nombre" : "Jorge",
  "cantidad" : 113,
  "hora" : "12:20:21",
  "stockRestante" : 13,
  "ubicacion" : "11.3123123,32.3213123"
}
```

```sh
localhost:1000/profugo

{
  "nombre" : "Jorge",
  "ubicacion" : "12.3123123,32.3213123"
}
```
