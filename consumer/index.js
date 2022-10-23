import Kafka from 'node-rdkafka';
import { miembro } from '../eventType.js';
import { sql } from './postgres.js';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe(['nuevosMiembros']);
  consumer.consume();
}).on('data', async (data) => {
  /*
  const users = await sql`
    insert into users
      (nombre, apellido, rut, correoDueno, patenteCarrito, registro)
    values
      (${miembro.fromBuffer(data.value).nombre}, ${miembro.fromBuffer(data.value).apellido}, ${miembro.fromBuffer(data.value).rut}, ${miembro.fromBuffer(data.value).correoDueno}, ${miembro.fromBuffer(data.value).patenteCarrito}, ${miembro.fromBuffer(data.value).resgistro})
    returning nombre, apellido, rut, correoDueno, patenteCarrito, registro
  `
  console.log(`Nuevo miebro registrado : ${users}`);*/ 
  //console.log(`recibe data : ${JSON.parse(data)}`)
  console.log(`recibe data value: ${data.value.toString().split(' ')}`)
  console.log(`recibe data value: ${data.value.toString().split('\n')}`)
  //console.log(`recibe data value con buffer : ${miembro.fromBuffer(JSON.parse(JSON.stringify(data.value)).data.toString().split(','))}`)
  //console.log(`recibe data : ${miembro.fromBuffer(JSON.stringify(data.value.data))}`)
  //console.log(miembro.fromBuffer(data.value.data));
})

