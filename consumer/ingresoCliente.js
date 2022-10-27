import Kafka from 'node-rdkafka';
import { escribirArchivo } from '../archivos.js';
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

  await escribirArchivo('./miembros.txt', JSON.stringify(received), (res) => {
    console.log(`llegue por la particion ${data.partition} y me guarde en el archivo.`)
  })

})

