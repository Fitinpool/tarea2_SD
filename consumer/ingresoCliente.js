import Kafka from 'node-rdkafka';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe(['nuevosMiembros']);
  consumer.consume();
}).on('data', async (data) => {

  const received = JSON.parse(data.value.toString())

  console.log(received)
  /*
  const users = await sql`
    insert into miembros
      (nombre, apellido, rut, correoDueno, patenteCarrito, registro)
    values
      (${received.nombre}, ${received.apellido}, ${received.rut}, ${received.correoDueno}, ${received.patenteCarrito}, ${received.resgistro})
    returning nombre, apellido, rut, correoDueno, patenteCarrito, registro
  `
  console.log(`Nuevo miebro registrado : ${users}`);*/
})

